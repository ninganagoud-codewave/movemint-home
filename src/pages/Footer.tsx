import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121421] text-[#D2D3DD] py-4 w-full">
      <div className='flex justify-between items-center px-4 md:px-6  footer-padding-smaller w[80]'>
        <div>
          <p className='footer-text footer-text-smaller text-responsive'>© Copyright 2023 Movemint Private Limited. All rights reserved.</p>
        </div>
        <div className='flex gap-4'>
          <img src={'/images/facebookIcon.svg'} alt="facebook" className="w-4 h-4 sm:w-6 sm:h-6 footer-icon-smaller"/>
          <img src={'/images/googleIcon.svg'} alt="google" className="w-4 h-4 sm:w-6 sm:h-6 footer-icon-smaller"/>
          <img src={'/images/instagramIcon.svg'} alt="instagram" className="w-4 h-4 sm:w-6 sm:h-6 footer-icon-smaller"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;