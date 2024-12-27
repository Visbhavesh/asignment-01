import React, { useEffect, useState } from 'react';
import Rotate from './Motion.tsx'; // Import the Rotate component
import Image from './Image.tsx'; // Adjust path as needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []);

  return (
    <div className="App h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/2k75BJy/pexels-minan1398-813269.jpg')" }}>

     
      {loading ? (
        <div className="flex justify-center items-center">
          <Rotate /> 
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Image /> {/* Show the Image component after loading */}
        </div>
      )}
      
      {/* Header Section */}
      <div className="fixed top-8 w-full max-w-[90%] max-h-[50px] sm:max-w-[80%] lg:max-w-[54%] z-[9999] flex justify-between items-center px-4 py-3 bg-black/80 text-white shadow-md rounded-2xl">
        <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 list-none m-0 p-0">
          <li>
            <a href="#home" className="text-white text-xs sm:text-sm hover:text-cyan-400 transition-colors flex items-center gap-1">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#about" className="text-white text-xs sm:text-sm hover:text-cyan-400 transition-colors flex items-center gap-1">
              About
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#services" className="text-white text-xs sm:text-sm hover:text-cyan-400 transition-colors flex items-center gap-1">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white text-xs sm:text-sm hover:text-cyan-400 transition-colors flex items-center gap-1">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
        </ul>

        <h4 className="text-xs sm:text-sm lg:text-lg font-bold bg-white text-black/70 px-2 rounded-[8px]">Sign In</h4>
      </div>
    </div>
  );
}

export default App;
