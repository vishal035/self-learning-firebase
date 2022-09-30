import React from 'react';

const BackgroundCircles = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 flex flex-col items-center blur-md animate-spin-slow">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#00171f"
          d="M45.5,-79.6C58.3,-71.5,67.4,-57.8,75.8,-43.7C84.1,-29.5,91.7,-14.7,92,0.1C92.2,15,85.1,30,76.6,44C68.2,58,58.3,71,45.3,79C32.3,87,16.2,90.1,0.2,89.8C-15.8,89.5,-31.6,85.8,-45.7,78.4C-59.8,71.1,-72.2,60,-79.5,46.3C-86.8,32.6,-89,16.3,-87.6,0.8C-86.2,-14.7,-81.2,-29.3,-74,-43.2C-66.8,-57,-57.4,-70.1,-44.7,-78.3C-32,-86.5,-16,-89.9,0.2,-90.2C16.4,-90.6,32.8,-87.8,45.5,-79.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default BackgroundCircles;

/*
<div className="bg-green-600 relative">
        <svg
          className="bg-green-600"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentcolor"
            d="M45.5,-79.6C58.3,-71.5,67.4,-57.8,75.8,-43.7C84.1,-29.5,91.7,-14.7,92,0.1C92.2,15,85.1,30,76.6,44C68.2,58,58.3,71,45.3,79C32.3,87,16.2,90.1,0.2,89.8C-15.8,89.5,-31.6,85.8,-45.7,78.4C-59.8,71.1,-72.2,60,-79.5,46.3C-86.8,32.6,-89,16.3,-87.6,0.8C-86.2,-14.7,-81.2,-29.3,-74,-43.2C-66.8,-57,-57.4,-70.1,-44.7,-78.3C-32,-86.5,-16,-89.9,0.2,-90.2C16.4,-90.6,32.8,-87.8,45.5,-79.6Z"
            transform="translate(100 100)"
          />
        </svg>
     <div className="absolute flex flex-col justify-center items-center top-28 w-96 h-96 bg-green-400 rounded-full animate-spin-slow blur-xl"> 
      <div className="relative z-20 top-28 w-96 h-96 bg-violet-600 black rounded-full animate-bounce-slow blur-xl"></div> 
        <div className="relative top-0 w-96 h-96 bg-blue-600  rounded-full animate-bounce-slow blur-xl"></div> 
     </div> 
      </div>
      */
// <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//   <path
//     fill="#FF0066"
//     d="M40.1,-69.5C53.6,-61.7,67.3,-54.3,74.3,-42.7C81.2,-31.2,81.3,-15.6,81.1,-0.1C80.9,15.4,80.4,30.8,73.7,42.6C67,54.5,54.1,62.9,40.7,67.7C27.4,72.5,13.7,73.8,-0.6,74.8C-14.9,75.9,-29.8,76.7,-44.2,72.4C-58.5,68.2,-72.3,58.9,-78.2,46C-84.1,33.1,-82.2,16.6,-79.9,1.3C-77.6,-13.9,-75.1,-27.9,-69.5,-41.3C-63.8,-54.8,-55.2,-67.7,-43.1,-76.4C-31.1,-85,-15.5,-89.4,-1.1,-87.4C13.3,-85.5,26.6,-77.3,40.1,-69.5Z"
//     transform="translate(100 100)"
//   />
// </svg>
