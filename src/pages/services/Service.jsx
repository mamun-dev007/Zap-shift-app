import React from "react";
import { motion } from "framer-motion";
import servicesimg from '../../assets/service.png'

const benefits = [
{
   
    title: "Better Focus",
    desc: "Stay concentrated on your goals and reduce distractions.",
  },
  {
    
    title: "Reduced Stress",
    desc: "Healthy routines calm your mind and improve well-being.",
  },
  {
    
    title: "Time Management",
    desc: "Organize your day efficiently and reclaim wasted hours.",
  },
  {
   
    title: "Track Progress",
    desc: "Measure your growth daily and celebrate small wins.",
  },
  {
    
    title: "Improved Health",
    desc: "Consistent habits boost physical and mental health.",
  },
  {
    
    title: "Better Relationships",
    desc: "Reliable routines make you more present for others.",
  },
  {
   
    title: "Lifelong Learning",
    desc: "Daily practice compounds into real skill growth.",
  },
  {
    
    title: "Achievement Mindset",
    desc: "Small wins build confidence and long-term success.",
  },

];
const Service = () => {
    return (
        <section className=" mt-20 bg-[#03373d] pb-10 px-10">
  <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" text-center"
    >
    <h2 className="text-3xl font-bold text-white mb-8 text-center pt-10">Our Services </h2>
    <p className="text-center max-w-3xl mx-auto text-white py-2">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 xl:px-0 gap-6">
      {benefits.map((b, i) => (
        <div key={i} className="bg-white p-6  shadow text-center rounded-3xl">
          <img src={servicesimg} alt="" className="flex mx-auto"/>
          <div className="mb-4 text-blue-600 justify-center flex">{b.icon}</div>
          <h3 className="font-semibold mb-2">{b.title}</h3>
          <p className="text-gray-600">{b.desc}</p>
        </div>
      ))}
    </div></motion.section>
  </section>
    );
};

export default Service;