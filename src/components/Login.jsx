import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const {loginUser,signGoogle} = useContext(AuthContext)
    const handleLogin = event=>{
        event.preventDefault()
        const email =event.target.email.value;
        const password= event.target.password.value
        console.log(email,password)
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    const handleGoogle=() =>{
    signGoogle()
    .then(result=>{
      console.log(result.user)
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
            <button onClick={handleGoogle} className='btn btn-warning'>Google</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;