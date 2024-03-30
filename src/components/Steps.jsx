import React, { useRef, useState } from 'react';
import vedio1 from "../assets/myimg/1100604015-preview.mp4";
import vedio2 from "../assets/myimg/1108158079-preview.mp4"; 
import vedio3 from "../assets/myimg/handsvedio.mp4"; 
import vedio4 from "../assets/myimg/1108158079-preview.mp4"; 

const Steps = () => {
  const [progress, setProgress] = useState(Array(4).fill(0));
  const videos = useRef([]);

  const captions = [
    "Step 1- Brace",
    "Step 2-Switch On",
    "Step 3- Relax"
  ];

  const handleProgress = (index, event) => {
    const video = videos.current[index];
    const duration = video.duration;
    const currentTime = video.currentTime;
    const percent = (currentTime / duration) * 100;

    setProgress(prevProgress => {
      const newProgress = [...prevProgress];
      newProgress[index] = percent;
      return newProgress;
    });
  };



  return (
    <div className='text-4xl  text-[#000F38] lg:-mt-24 mt-20 text-center p-4 font-bold'>
      How to use?
      <div className=' h-300px  px-10 mt-10 grid-cols-3 flex gap-1 flex-col lg:flex-row overflow-hidden'>
        {[vedio1, vedio2, vedio3].map((videoSrc, index) => (
          <div key={index} className="relative">
            <video
              ref={(el) => (videos.current[index] = el)}
              width=" "
              height="500"
              muted
              loop
              onTimeUpdate={(event) => handleProgress(index, event)}
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div
              className="absolute  bottom-0 left-0 w-full h-2 bg-red-600"
              style={{ width: `${progress[index]}%` }}
            ></div>
            <div className="absolute bottom-0 left-0 my-1  right-0 text-lg bg-gray-900 text-white  text-center">
              {captions[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
