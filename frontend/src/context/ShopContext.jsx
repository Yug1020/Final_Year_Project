import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => 
    {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = "https://mentormap-qb93.onrender.com"
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId, size) => {
        // When no size is provided, use a default key so size selection isn't required
        const normalizedSize = size || 'default';

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][normalizedSize]) {
                cartData[itemId][normalizedSize] += 1;
            }
            else {
                cartData[itemId][normalizedSize] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][normalizedSize] = 1;
        }
        setCartItems(cartData);
        toast.success('Session In Schedule');

        if (token && backendUrl) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, size: normalizedSize }, { headers: { token } })

            } catch (error) {
                console.log('Backend not available for cart add:', error.message)
                // Don't show error toast for missing backend
            }
        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                } 
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData)

        if (token && backendUrl) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

            } catch (error) {
                console.log('Backend not available for cart update:', error.message)
                // Don't show error toast for missing backend
            }
        }

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            // If no backend URL is set, use mock data
            if (!backendUrl) {
                console.log('No backend URL set, using mock data');
                setProducts([]);
                return;
            }

            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products.reverse())
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log('Backend not available, using mock data:', error.message)
            // Don't show error toast for missing backend, just use empty products
            setProducts([]);
        }
    }

    const getUserCart = async ( token ) => {
        try {
            // If no backend URL is set, skip cart fetching
            if (!backendUrl) {
                console.log('No backend URL set, skipping cart fetch');
                return;
            }
            
            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log('Backend not available for cart:', error.message)
            // Don't show error toast for missing backend
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        if (token) {
            getUserCart(token)
        }
    }, [token])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;