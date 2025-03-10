import React from "react";

const SimpleCardImage = ({ imageUrl }) => {
    console.log(imageUrl);
  return (
    <img
      src={imageUrl}
      alt="Club image"
      className="w-full h-48 object-cover mx-auto"
    />
  );
};

export default SimpleCardImage;
