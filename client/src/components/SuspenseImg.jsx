import React, { useState } from "react";

const SuspenseImg = ({ src, ...rest }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="h-64 w-64 rounded-md bg-white flex justify-center items-center">
          <div className="border-t-4 border-t-[#4285F4] rounded-full animate-spin h-16 w-16"></div>
        </div>
      )}
      <img src={src} onLoad={handleImageLoad} style={{ display: imageLoaded ? 'block' : 'none' }} {...rest} />
    </div>
  );
};

export default SuspenseImg;