import React from 'react';
import Image from 'next/image';
import gun from '/public/gun.png'

const Card = () => {
  const handleButtonClick = () => {
    alert('Damn Kys fr');
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src="/public/gun.webp"
        alt="Card Image"
        width={400}
        height={250}
        className="w-full"
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Card Title</h1>
        <p className="text-gray-600 mt-2">
          This is a description of the card. It provides additional details about the content of the card.
        </p>
        <div className="mt-4">
          <button
            onClick={handleButtonClick}
            className="relative px-8 py-3 font-bold text-white bg-black border border-black rounded-md overflow-hidden shadow-lg group"
          >
            <span className="absolute inset-0 w-full h-full transition-transform transform translate-x-0 translate-y-0 bg-white group-hover:translate-x-1 group-hover:translate-y-1 duration-200 ease-out"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out bg-black rounded-md group-hover:bg-white"></span>
            <span className="relative group-hover:text-black z-10">Click Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
