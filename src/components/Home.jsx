import Button from "../layouts/Button";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import bg1 from "../assets/myimg/4.jpg";
import bg2 from "../assets/myimg/marqee/cropdevice.jpg";
import bg3 from "../assets/myimg/6.jpg";

const Home = () => {
  const [currentBg, setCurrentBg] = useState(bg1);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [bg1,bg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentBg(backgroundImages[currentBgIndex]);
  }, [currentBgIndex]);

  return (
    <div className="w-full min-h-screen shadow-2xl rounded-b-lg relative rounded-md">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            className="absolute inset-0 w-full h-full rounded-b-lg object-cover transition-opacity duration-1000 ease-in-out"
            src={image}
            alt=""
            style={{ opacity: currentBgIndex === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0   shadow-md opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none">
        <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight pointer-events-auto">
          We Ensure better Health <br /> for a better world
        </h1>
        <p className="text-white lg:px-24 mt-4 pointer-events-auto">
          Swayogya revolutionizes healthcare by leveraging technology with <br />advanced PEMF therapy for improved wellness.
        </p>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="mt-6 pointer-events-auto"
        >
          <Button title="Explore More" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
