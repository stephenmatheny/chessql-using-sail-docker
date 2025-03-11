import React from "react";

const SimpleCard = ({ children }) => {
  return (
    <div className="w-full text-gray-800 mx-auto bg-white rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default SimpleCard;
