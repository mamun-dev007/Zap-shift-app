import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {registerUser, updateUserProfile} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitRegister = (data) => {
    const profileImg = data.file[0];
    registerUser(data.email, data.password)
    .then(result =>{
       const formData = new FormData();
       formData.append('image',profileImg);
const imgApi= `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_key}`;

       axios.post(imgApi, formData)
       .then(res =>{
        console.log('after', res.data.data.url)
        const userProfile= {
          displayName: data.name,
          photoURL : res.data.data.url,
        }
        updateUserProfile(userProfile)
        .then(()=>{
          navigate(location.state || '/')
          console.log('user profile update done')
        })
        .catch(err =>{
          console.log(err)
        })
       })


      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  };
  return (
    <div className=" bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
    <h3 className="text-3xl text-center font-semibold">Welcome to Zap Shift</h3>
    <p className="text-center">please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleSubmitRegister)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="Name"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500"> Name is required</p>
          )}

          <label className="label">Photo </label>
             <input
            type="file"
            {...register("file", { required: true })}
            className="file-input"
            placeholder="Email"
          />

          {errors.file?.type === "required" && (
            <p className="text-red-500"> file is required</p>
          )}


          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500"> Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, maxLength: 20, minLength:6,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
  })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500"> password is required</p>
          )}

{errors.password?.type === "minLength" && (
            <p className="text-red-500">password min 6 characters or langer</p>
          )}

{errors.password?.type === "pattern" && (
            <p className="text-red-500"> password must be uppercase, lowercase, numbers</p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="">Already Have an account ? <Link state={location.state} to='/login' className="text-green-300"> Login</Link></p> 
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
