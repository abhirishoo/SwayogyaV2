import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({ title }) => {
  return (
    <div>
      <button className=" bg-white gap-2 flex justify-center  flex-row rounded-full select-none text-black px-4 py-2  transition duration-300 ease-in-out">
        {title}  <FaArrowRightLong className="mt-1" />
      </button>
    </div>
  );
};

export default Button;
