import React from 'react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 max-w-lg mx-auto">
        <div className="border border-black p-4 rounded-lg font-extrabold bg-red-100 text-xl text-center mb-6 shadow-lg">
          Shovin Jeson Dsouza
        </div>
        <div className="bg-white p-7 rounded-lg shadow-md text-gray-800 text-center">
          <p className="text-lg mb-4">
            I like games
          </p>
          <p className="text-base mb-4">
            I have learnt Alphabets, numbers, addition, subtraction, multiplication, division, algebra, integration, differentiation.
            Yes, I have learnt stuff. I am just blabbering since I have no clue what I am doing right now. Hahahahahahaha!
          </p>
        </div>
        <Button />
      </div>
    </>
  );
}

export default Page;
