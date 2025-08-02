import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  const axiosPublic=useAxiosPublic()
    const {createUser,signGoogle} =useContext(AuthContext)
    const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(result=>{
        console.log(result.user)
        const userInfo={
          email:data.email,
          name:data.name,
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
          }
        })

    })
    .catch(error=>{
        console.log(error.message)
    })
  }
  const handleGoogle=() =>{
    signGoogle()
    .then(result=>{
      
      console.log(result.user)
      const userInfo ={
        email:result.user?.email,
        name:result.user?.displayName
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        navigate('/')

      })
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered"  />
              {errors.name && <span className='text-red-500'>This field is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
                     {errors.email && <span className='text-red-500'>This field is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true ,minLength:6})} type="password" placeholder="password" className="input input-bordered"  />
 {errors.password?.type === "required" && (
        <p className='text-red-500' role="alert">password is required</p>
      )}
      {errors.password?.type === "minLength" && (
        <p className='text-red-500' role="alert">Password must be at least 6 characters</p>
      )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input type="submit" value="Register" className='btn btn-warning' />
        </div>
      </form>
      <button onClick={handleGoogle} className='btn btn-warning'>Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;