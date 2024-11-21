import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='my-10 mt-40 text-sm'>
      <div className='grid grid-cols-[3fr_1fr_1fr] gap-14'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>Vigor is an innovative healthcare app designed to provide users with personalized, accessible, and affordable healthcare solutions. </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <a href="tel:+919341823709" className="hover:underline">+91-9341823709</a>
            </li>
            <li>
              <a href="mailto:ayusharyanraj843103@gmail.com" className="hover:underline">ayusharyanraj843103@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr  className='mt-6'/>
        <p className='py-5 text-center text-sm'>Copyright 2024@vigor.com - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
