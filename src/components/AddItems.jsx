import React from 'react';
import { useForm } from "react-hook-form"
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';

const img_host_key = import.meta.env.VITE_IMAGE_HOST_KEY

const img_api = `https://api.imgbb.com/1/upload?expiration=600&key=${img_host_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
     const {
    register,
    handleSubmit,
  reset,
   
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    const imageFile={ image: data.image[0] }
    //console.log(imageFile)
    const res = await axiosPublic.post(img_api,imageFile,{
       headers: {
        'Content-Type': 'multipart/form-data'
       },
    })
    console.log(res.data)
    if(res.data.success){
        const menuItem ={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url


        }
        console.log('success',menuItem)
       const menuRes = await axiosSecure.post('/menu',menuItem)
              if(menuRes.data.insertedId){
                console.log(menuRes.data)
                reset()
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

       }
    }
  }
    return (
        <div className='flex flex-col'>
                <form onSubmit={handleSubmit(onSubmit)}>
      
     
      <input {...register("name",{required:true})} type="text" placeholder="Name" className="input input-bordered w-full mb-5" />
     <select defaultValue="default" {...register("category",{required:true})} className="select mb-5  select-bordered w-full">
  <option disabled value="defaultValue">Select Category</option>
  <option value="salad">Salad</option>
  <option value="soup">Soup</option>
  <option value="pizza">Pizza</option>
  <option value="drinks">Drinks</option>
  <option value="dessert">Dessert</option>

</select>
<input {...register("price",{required:true})} type="number" placeholder="Price" className="input mb-5  input-bordered w-full" />
      <textarea {...register("recipe")} className="textarea mb-5  textarea-bordered" placeholder="Recipe Details"></textarea>
     <input {...register('image')}
  type="file"
  className="file-input file-input-bordered file-input-primary w-full" />
      <input className='btn' type="submit" value="Submit" />
    </form>
        </div>
    );
};

export default AddItems;