import { Link } from "react-scroll";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../assets/myimg/logoWhatsApp_Image_2024-03-27_at_23.03.33_99e6d0d0-removebg-preview.png"
const Footer = () => {
  return (
    <div className=" bg-[#0A4B7F] text-white  rounded-t-3xl  md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/5">
          <h1 className=" font-semibold text-xl pb-4 text-[#FFA810]"> 
          <img className="w-20" src={logo} alt="" /></h1>
          <p className=" text-sm">
            Our team is of dedicated engineers & doctors, each specializing in unique fields.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 text-[#FFA810] md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">  
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Engineers & Doctors 
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 text-[#FFA810] md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              PEMF Therapy Devices
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Rehabilitation Services
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Educational Resources & Training
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Personalized Consultation and <br /> Technical Support
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-[#FFA810]">Follow Us</h1>
          <nav className=" flex flex-row rounded-md  gap-2 ">
       
            <a className="hover:text-hoverColor " target="_blank" href="" rel="noreferrer">
            <FaSquareFacebook size={35} /></a>          
           <a className="hover:text-hoverColor " target="_blank" href="" rel="noreferrer"><FaSquareXTwitter size={35} /></a>
           <a className="hover:text-hoverColor " target="_blank" href="" rel="noreferrer"><FaGooglePlusSquare size={35} /></a>
           <a className="hover:text-hoverColor " target="_blank" href="" rel="noreferrer"><FaInstagramSquare size={35} /></a>

           
          </nav>
        </div>
      </div>
      <div className="px-20 opacity-55">

      <hr />
      </div>
      <div> 
        <p className=" text-center py-4">
         ©2024
          <span className=" text-hoverColor"> Swayogya </span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
