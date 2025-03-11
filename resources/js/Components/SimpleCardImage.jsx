import React from "react";

const SimpleCardImage = ({ imageUrl, className="w-full h-48 object-cover mx-auto" }) => {
    console.log(imageUrl);
  return (
    <img
      src={imageUrl}
      alt="Club image"
      className={className}
    />
  );
};

export default SimpleCardImage;
