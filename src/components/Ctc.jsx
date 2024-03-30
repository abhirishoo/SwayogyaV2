import React from 'react';
import { FaBuilding } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import logo from "../assets/myimg/marqee/CompanyLogo.png";

const Ctc = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100  justify-between p-4 md:px-6 lg:px-44 text-[#0A4B7F] font-semibold">
      {/* Clinic Location */}
        <img className="w-14 md:w-[70px] lg:-mx-24 mx-40 mb-5 lg:mb-0" src={logo } alt="" />
      <div className="flex items-center mb-4 md:mb-0">
        <FaBuilding size={25} className="mr-2" />
        <div className="ml-2 ">
          <span className="text-lg md:text-2xl noto">Clinic Location</span> <br />
          <span className="text-[#FFA405]">KIIT-TBI, KIT University</span>
        </div>
      </div>

      {/* Free Consultation */}
      <div className="flex items-center">
        <IoCall size={25} className="mr-2" />
        <div className="flex flex-col">
          <span className="text-lg md:text-2xl noto ">Free Consultation</span>
          <span className="text-[#FFA405]">+91 9079938655</span>
        </div>
      </div>

      {/* Work Hours */}
      <div className="flex items-center  md:ml-0">
        <FaClock size={25} className="mr-2" />
        <div className="flex flex-col">
          <span className="text-lg md:text-2xl noto">Work Hours</span>
          <span className="text-[#FFA405]">Mon - Sat : 08:00 - 17:00</span>
        </div>
      </div>
    </div>
  );
};

export default Ctc;
