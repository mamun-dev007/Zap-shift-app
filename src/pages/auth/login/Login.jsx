import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signInUser}= useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitLogin = (data) => {
      signInUser(data.email, data.password)
      .then(result =>{
          console.log(result.user);
          navigate(location.state  || '/')
          
    })
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
    <h3 className="text-3xl text-center font-semibold">Welcome Back</h3>
    <p className="text-center">please login</p>
      <form className="card-body" onSubmit={handleSubmit(handleSubmitLogin)}>
        <fieldset className="fieldset">
          {/*email */}
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

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
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
            <p className="text-red-500">
              {" "}
              password must be uppercase, lowercase, numbers
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
         <p className="">Have an account ? <Link state={location.state} to='/register' className="text-green-300"> Register</Link></p> 
         <SocialLogin> </SocialLogin>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
