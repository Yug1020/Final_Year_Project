import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  // const [image2,setImage2] = useState(false)
  // const [image3,setImage3] = useState(false)
  // const [image4,setImage4] = useState(false)

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [description, setDescription] = useState("");
   const [details, setDetails] = useState("");
   const [price, setPrice] = useState("");
   const [mastersCountry, setMastersCountry] = useState("");
   // Backend requires these fields; use sensible defaults for mentor entity
   const [category] = useState("Mentor");
   const [subCategory] = useState("General");
   const [sizes] = useState([]); // not used for mentors, but required by backend
   const [bestseller] = useState(false);
   const [availability, setAvailability] = useState([
     { day: "Monday", start: "09:00", end: "10:00" }
   ]);

   const addAvailabilitySlot = () => {
     setAvailability(prev => [
       ...prev,
       { day: "Monday", start: "09:00", end: "10:00" }
     ]);
   };

   const updateAvailabilitySlot = (index, field, value) => {
     setAvailability(prev => {
       const copy = [...prev];
       copy[index] = { ...copy[index], [field]: value };
       return copy;
     });
   };

   const removeAvailabilitySlot = (index) => {
     setAvailability(prev => prev.filter((_, i) => i !== index));
   };

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
     if (!image1) {
       toast.error("Please upload an image");
       return;
     }
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("email",email)
      formData.append("description",description)
      formData.append("price",price)
     formData.append("category", category)
     formData.append("subCategory", subCategory)
     formData.append("sizes", JSON.stringify(sizes))
     formData.append("bestseller", String(bestseller))
     formData.append("details", details)
     formData.append("mastersCountry", mastersCountry)
      formData.append("availability", JSON.stringify(availability))

      image1 && formData.append("image1",image1)
      // image2 && formData.append("image2",image2)
      // image3 && formData.append("image3",image3)
      // image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setEmail('')
        setDescription('')
       setImage1(false)
        setPrice('')
       setDetails('')
        setMastersCountry('')
        setAvailability([{ day: "Monday", start: "09:00", end: "10:00" }])
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
   }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div>
          <p className='mb-2'>Upload Image</p>

          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
            </label>
            {/* <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
            </label>
            <label htmlFor="image3">
              <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
            </label>
            <label htmlFor="image4">
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
            </label> */}
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Mentor name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Mentor Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full max-w-[500px] px-3 py-2' type="email" placeholder='mentor@example.com' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Mentor's Achievement</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Mentor's Detail</p>
          <textarea onChange={(e)=>setDetails(e.target.value)} value={details} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Add extra details (qualifications, experience, etc.)' />
        </div>

        <div className='flex flex-col w-full gap-4 sm:gap-6'>
          <div>
            <p className='mb-2'>Session Charges</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
          </div>

          <div className='w-full'>
            <p className='mb-2'>Masters Country</p>
            <select onChange={(e)=>setMastersCountry(e.target.value)} value={mastersCountry} className='w-full max-w-[500px] px-3 py-2'>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="New Zealand">New Zealand</option>
            </select>
          </div>

          <div className='w-full'>
            <p className='mb-2'>Mentor Availability</p>
            <div className='flex flex-col gap-3'>
              {availability.map((slot, index) => (
                <div key={index} className='flex flex-col sm:flex-row gap-2 sm:items-end'>
                  <div>
                    <p className='mb-2'>Day</p>
                    <select
                      value={slot.day}
                      onChange={(e) => updateAvailabilitySlot(index, 'day', e.target.value)}
                      className='w-full px-3 py-2'
                    >
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className='mb-2'>Start</p>
                    <input
                      type='time'
                      value={slot.start}
                      onChange={(e) => updateAvailabilitySlot(index, 'start', e.target.value)}
                      className='w-full px-3 py-2'
                    />
                  </div>
                  <div>
                    <p className='mb-2'>End</p>
                    <input
                      type='time'
                      value={slot.end}
                      onChange={(e) => updateAvailabilitySlot(index, 'end', e.target.value)}
                      className='w-full px-3 py-2'
                    />
                  </div>
                  <button
                    type='button'
                    onClick={() => removeAvailabilitySlot(index)}
                    className='px-3 py-2 bg-red-500 text-white'
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={addAvailabilitySlot}
                className='w-fit px-4 py-2 bg-gray-200'
              >
                + Add another time slot
              </button>
            </div>
          </div>
        </div>


        

        <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD MENTOR</button>

    </form>
  )
}

export default Add