import React from 'react';

const Rider = () => {
    return (
        <div className='items-center flex mx-auto justify-center place-items-center h-screen'>
         <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl ">
      <form className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">be a ride</button>
        </fieldset>
      </form>
    </div></div>
    );
};

export default Rider;