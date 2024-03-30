import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { MdBiotech, MdHealthAndSafety, MdOutlinePeople } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <MdBiotech size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaBookReader size={35} className=" text-backgroundColor" />;
  const icon4 = <MdOutlinePeople size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-5xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          </p>
        </div>
     
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="PEMF Therapy Devices" paragraph={"Desktop PEMF Device: Designed for clinical and home use, providing targeted therapy for knee osteoarthritis."}  />
        <ServicesCard icon={icon2} title="Rehabilitation Services" paragraph={"Custom Rehabilitation Plans: Personalized therapy sessions leveraging our PEMF devices, tailored to each patient's needs."}/>
        <ServicesCard icon={icon3} title="Educational Resources & Training" paragraph={"PEMF Device Clinical Application Training: Dive into the world of Pulsed Electromagnetic Field therapy with our training program."} />
        <ServicesCard icon={icon4} title="Consultation and Technical Support" paragraph={"Personalized Consultation and Technical Support for users."}/>
      </div>
    </div>
  );
};

export default Services;
