import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-3 font-bold text-white bg-black border border-black rounded-md overflow-hidden shadow-lg group"
    >
      <span className="absolute inset-0 w-full h-full transition-transform transform translate-x-0 translate-y-0 bg-white group-hover:translate-x-1 group-hover:translate-y-1 duration-200 ease-out"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out bg-black rounded-md group-hover:bg-white"></span>
      <span className="relative group-hover:text-black z-10">KILL MY SELF</span>
    </button>
  );
};

export default Button;
