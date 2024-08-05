import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const handleMouseEnterCourse = () => {
    setIsCourseDropdownOpen(true);
  };

  const handleMouseLeaveCourse = () => {
    setIsCourseDropdownOpen(false);
  };

  const handleMouseEnterJob = () => {
    setIsJobDropdownOpen(true);
  };

  const handleMouseLeaveJob = () => {
    setIsJobDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <div className="flex space-x-4">
        <Link to="/" className="text-black">Home</Link>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnterCourse} 
          onMouseLeave={handleMouseLeaveCourse}
        >
          <button className="text-black">Course</button>
          {isCourseDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <Link to="/course/web-development" className="block px-4 py-2 text-black hover:bg-gray-100">Web Development</Link>
              <Link to="/course/data-science" className="block px-4 py-2 text-black hover:bg-gray-100">Data Science</Link>
              <Link to="/course/design" className="block px-4 py-2 text-black hover:bg-gray-100">Design</Link>
            </div>
          )}
        </div>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnterJob} 
          onMouseLeave={handleMouseLeaveJob}
        >
          <button className="text-black">Find job</button>
          {isJobDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <Link to="/job/software-engineer" className="block px-4 py-2 text-black hover:bg-gray-100">Software Engineer</Link>
              <Link to="/job/data-analyst" className="block px-4 py-2 text-black hover:bg-gray-100">Data Analyst</Link>
              <Link to="/job/designer" className="block px-4 py-2 text-black hover:bg-gray-100">Designer</Link>
            </div>
          )}
        </div>
        <Link to="/about" className="text-black">About Us</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="px-2 py-1 border rounded" />
        <button className="px-4 py-2 bg-gray-300 rounded">Search</button>
        <Link to="/login" className="px-4 py-2 bg-black text-white rounded">Log in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
