import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({childen}) => {
    const location = useLocation();
    const {user , loading} = useAuth();

    if(loading){
        return <div><span className="loading loading-dots loading-xl"></span> </div> 
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return childen;
};

export default PrivateRoute;