import React from 'react';
import illustration from '../assets/Homepage.png'; // Ensure the path is correct

const Home = () => {
  return (
    <div className="flex flex-col items-center p-12 relative">
      <div className="relative w-full flex justify-center">
        <img src={illustration} alt="Illustration" className="w-2/4" />
        <div className="absolute top-2/4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-">Upgrade your skill now</h1>
          <button className="px-6 py-3 bg-black text-white rounded">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

