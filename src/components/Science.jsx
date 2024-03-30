import React from 'react';
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/myimg/marqee/science.png"; // Import your image for the carousel

const Science = () => {
  const carouselData = [
    { id: 1, image: {image1}, title: "Title 1", description: "Description 1" },
    { id: 2, image: "../assets/myimg/10.jpg", title: "Title 2", description: "Description 2" },
    { id: 3, image: "../assets/myimg/3.jpg", title: "", description: "" }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="min-h-screen flex flex-col  lg:flex-row lg:px-32 px-5 pt-24 lg:pt-1 gap-20">
      <div className="w-full lg:w-3/4">
        <div className="text-3xl font-bold text-center   lg:text-start noto text-[#FFA810] ">Science behind <br /> 
          <span className="text-7xl text-[#008EFF]">Swaknee</span>
        </div>
        <p className="text-justify mt-10 lg:text-start">
          How "SWA-KNEE" Works: <br />
          Emits low-frequency electromagnetic waves for tissue repair and inflammation reduction. <br />
          Simple one-button operation for user convenience.
        </p>
        <p className="text-justify opacity-90 mt-10  lg:text-start">
          The "SWA-KNEE" device offers safe and effective relief from knee pain, making it ideal for individuals with osteoarthritis seeking alternatives to medication and surgery. Its low-frequency electromagnetic waves promote healing, reduce inflammation, and enhance circulation. Convenient and non-invasive, it improves knee functionality and overall joint health while being easy to use with its one-button operation. With a portable, biocompatible knee brace included, it's clinically proven to reduce pain and enhance range of motion.
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <Slider {...carouselSettings} className="w-full hover:scale-105 transition duration-300 ease-in-out  lg:h-[60vh] shadow-xl rounded-xl">
          {carouselData.map(item => (
            <div key={item.id}>
              <img src={image1} alt="img" className="w-full lg:h-[58vh]" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Science;
