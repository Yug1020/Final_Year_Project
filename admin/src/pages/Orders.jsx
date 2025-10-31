import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  const parseTiming = (size) => {
    if (!size || size === 'default') return null;
    const parts = size.split('_');
    if (parts.length === 3) {
      return { day: parts[0], start: parts[1], end: parts[2] };
    }
    return null;
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}> {item.name} <span></span> </p>
                    }
                    else {
                      return <p className='py-0.5' key={index}> {item.name} <span></span> ,</p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
                <p className='mb-2'>{order.address.email}</p>
                <div>
                  
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                {/* Mentor Email and Availability for each item */}
                {order.items.map((item, index) => {
                  const timing = parseTiming(item.size);
                  return (
                    <div key={index} className={index === 0 ? 'mt-3' : 'mt-2'}>
                      {item.name && <p className='text-xs sm:text-sm mb-1'><span className='font-medium'>Mentor name:</span> {item.name}</p>}
                      {item.email && <p className='text-xs sm:text-sm mb-1'><span className='font-medium'>Mentor Email:</span> {item.email}</p>}
                      {timing && (
                        <p className='text-xs sm:text-sm mb-2'>
                          <span className='font-medium'>Session:</span> {timing.day} ({timing.start} - {timing.end})
                        </p>
                      )}
                    </div>
                  );
                })}
                <p className='mt-3'>Method : {order.paymentMethod}</p>
                <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Scheduled Session</option>
                <option value="Packing">Past Session</option>

              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders