import React from "react";

const Button = ({children, ...props}) => {
  return (
    <div>
      <button 
      className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
      {...props}
      >

        {children}

      </button>
    </div>
  );
};

export default Button;
