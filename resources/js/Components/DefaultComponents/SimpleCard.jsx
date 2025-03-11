import React from "react";

const SimpleCard = ({ children }) => {
  return (
    <div className="w-full text-gray-800 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default SimpleCard;
