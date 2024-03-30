import React from 'react';
import swaknee from "../assets/myimg/8.jpg";
import BlogCard from '../layouts/BlogCard';
import { IoIosCheckmarkCircle } from "react-icons/io";
import ReactPlayer from 'react-player';
import { FaArrowRightLong } from "react-icons/fa6";

const Swaknee = () => {
    const FeatureItem = ({ text }) => {
        return (
          <div className='flex flex-row gap-2 font-light lg:text-lg poppins text-slate-600'>
            <div className='mt-1.5'>
              <IoIosCheckmarkCircle color='#008EFF'  />
            </div>
            <div>{text}</div>
          </div>
        );
    };

    return (
        <div className='w-full min-h-screen flex flex-col lg:flex-row justify-between items-center px-5 lg:px-24'>
            <div className='w-full lg:w-1/2 mt-4 lg:mt-0'>
                <BlogCard img={swaknee} />
            </div>  
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <div className='lg:text-6xl text-5xl font-bold text-[#008EFF] noto mb-4'>
                    Swaknee <br />
                    <span className='lg:text-4xl text-2xl'>- the Knee Osteoarthritis Relief System!</span>
                </div>
                <p className='text-sm text-black opacity-75 font-normal w-full lg:w-[90%] poppins mt-3 mb-6 lg:mb-5'>
                    Combat knee osteoarthritis with our cutting-edge 'SWA-KNEE' devices, relieving pain, improving function, and enhancing knee joint health.
                </p>
                <div className='text-2xl poppins lg:mb-3 text-[#FFA810]'>
                    Features 
                </div>
                <div className='flex flex-col poppins gap-2 mb-6  lg:mb-10'>
                    <FeatureItem text="Easy to use, portable and IoT enabled" />
                    <FeatureItem text="Rechargeable battery" />
                    <FeatureItem text="Advanced PEMF technology" />
                    <FeatureItem text="Proven to reduce knee pain" />
                    <FeatureItem text="Improves knee functionality" />
                    <FeatureItem text="Promotes overall health of the knee joint" /> 
                </div>
                <div className='ml-24 lg:ml-0'>
                <button className='bg-[#FFA810] flex justify-center gap-3 rounded-full text-white text-lg font-normal lg:w-[30%] px-4 lg:px-0 py-2 '>
                    Know more 
                    <FaArrowRightLong className="mt-1.5" />
                </button>
                </div>
            </div>
        </div>
    );
}

export default Swaknee;
