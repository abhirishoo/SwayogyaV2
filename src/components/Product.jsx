import React from 'react'
import ReactPlayer from 'react-player'
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/myimg/1.jpg";
import img2 from "../assets/myimg/2.jpg";
import img3 from "../assets/myimg/3.jpg";
import img4 from "../assets/myimg/4.jpg";
import img5 from "../assets/myimg/5.jpg";
import img6 from "../assets/myimg/6.jpg";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-5xl font-semibold text-center lg:text-start">
            Why Swa-Knee?
          </h1>
          <p className=" mt-2 text-center lg:text-start">
        
          </p>
        </div>
       
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="" />
          <BlogCard img={img2} headlines="" />
          <BlogCard
            img={img3}
            headlines=""
          />
          <BlogCard img={img4} headlines="" />
          <BlogCard img={img5} headlines="" />
          <BlogCard img={img6} headlines="" />
        </div>
      </div>
      
      
        <div className='flex justify-center text-2xl font-semibold p-5'>How Does it Work?</div>
      <div className='flex justify-center mt-10' >
      <ReactPlayer  controls={true} url='https://www.youtube.com/watch?v=IfQyVm8Kftc' /> </div>
    </div>

  );
};

export default Product;
