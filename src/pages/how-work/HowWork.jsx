import React from 'react';
import imgWork1 from '../../assets/bookingIcon.png'

const HowWork = () => {
    return (
         <div className="max-w-7xl mx-auto text-center px-4 py-10">
    <h2 className="text-3xl font-bold text-blue-700 mb-10"> How It Works</h2>
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      {[
        { title: "Booking Pick & Drop", desc: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Cash On Delivery", desc: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Delivery Hub", desc: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Booking SME & Corporate", desc: "From personal packages to business shipments — we deliver on time, every time." },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all border border-blue-100"
        >
          <img src={imgWork1} alt="" className=' flex mx-auto '/>
          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
    );
};

export default HowWork;