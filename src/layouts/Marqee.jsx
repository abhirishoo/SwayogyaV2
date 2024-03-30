import Marquee from "react-fast-marquee";
import React from 'react'
import img1 from "../assets/myimg/marqee/aims.png"
import img2 from "../assets/myimg/marqee/big.png"
import img3 from "../assets/myimg/marqee/birac.png"
import img4 from "../assets/myimg/marqee/dst-logo.jpg"
import img5 from "../assets/myimg/marqee/govt.png"
import img6 from "../assets/myimg/marqee/kiit.png"
import img7 from "../assets/myimg/marqee/nidhi.png"
import img8 from "../assets/myimg/marqee/startup.png"
import img9 from "../assets/myimg/marqee/tbi.png"
const Marqee = () => {
  return (
    <div className=' gap-[40px] mt-20 '>
           <div className='text-4xl font-bold text-[#000F38] mb-10 text-center p-4 '>

                Our Collaborators
           <Marquee speed={100} gradient={true} className="mt-10">
                <div className="gap-10 flex flex-row">
        <div> <img className="w-30 h-20 px-2 " src={img1} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img2} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img3} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img4} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img5} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img6} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img7} alt="" /> </div>
        <div> <img className="w-30 h-20 px-2 " src={img8} alt="" /> </div>
        <div> <img className="w-30 h-20 px-10 " src={img9} alt="" /> </div>
        </div>
        </Marquee>


    </div>
        </div>
  )
}

export default Marqee;