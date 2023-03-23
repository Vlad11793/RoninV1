import React from 'react';
import styles from '../style';

const ContactUs = () => {
  const handleClick = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-semibold text-2xl transition-all bg-red-700 rounded-xl group cursor-pointer"
    >
      <span className="absolute top-0 right-0 inline-block w-6 h-6 transition-all duration-500 ease-in-out bg-red-800 rounded group-hover:-mr-6 group-hover:-mt-6">
        <span className="absolute top-0 right-0 w-7 h-7 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-900 rounded-2xl group-hover:mb-16 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-poppins">Contact Us</span>
    </button>
  );
};

export default ContactUs;
