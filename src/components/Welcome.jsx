import React from 'react';
import docHands from "../assets/myimg/docHands.mp4";
import dochand from "../assets/myimg/dochand.jpg";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between lg:-my-10 items-center lg:px-32 px-5 pt-24 lg:pt-1 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <div className="lg:text-4xl text-3xl font-black text-center text-[#FFA810] noto lg:text-start">
          Welcome to <br />
          <span className="lg:text-6xl text-[#008EFF]">Swayogya  Rehab Solution </span>
        </div>
        <p className="text-justify  lg:text-start ">
          
        </p>
        <p className="opacity-90 lg:text-start text-justify  ">
          At Swayogya, we harness technology to revolutionize healthcare, particularly in treating knee osteoarthritis with Pulsed Electromagnetic Field (PEMF) therapy. 
        </p>
        <p className="text-justify lg:text-start opacity-90">
          Embarking on our innovation journey, the 'SWA-KNEE' device underwent meticulous design, prototyping, and testing phases, culminating in optimized 
        </p>
      </div>
      <div className="w-full mt-10">
        <div className="w-full lg:w-[25%] mr-28 h-58 p-2 shadow-[rgba(0,_0,_0,_0.58)_0px_3px_8px] space-y-2 rounded-lg transition duration-300 ease-in-out lg:absolute right-1">
          <video
            autoPlay
            loop
            muted
            className="h-64 md:h-96 lg:h-52 w-full rounded-lg"
            src={docHands}
            alt="video"
          />
        </div>
        <div className="mt-10 lg:mt-0 w-full z-50 lg:w-[40%] h-40 p-2 shadow-[rgba(0,_0,_0,_0.58)_0px_3px_8px] space-y-2 rounded-lg transition duration-300 ease-in-out lg:relative bottom-28 left-36">
          <img
            className="h-36 md:h-96 lg:h-36 w-full rounded-lg"
            src={dochand}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
