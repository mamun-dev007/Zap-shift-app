import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex  items-end '>
            <img className='' src={logo} alt=""/>
            <h1 className='text-3xl font-bold -ms-2.5'>Zap Shift</h1>
        </div>
    );
};

export default Logo;