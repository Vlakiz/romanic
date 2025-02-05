import React from 'react';
import { Instagram, Facebook, Tiktok, Youtube } from 'react-bootstrap-icons';

const SocialLinks = () => {
  return (
    <div className="fs-3 text-secondary d-flex justify-content-center pb-3">
      <div className="social-link mx-3">
        <a href='https://www.instagram.com/evgenia_romanyuk_/' className='nav-link' target='_blank' rel="noreferrer">
          <Instagram/>
        </a>
      </div>

      <div className="social-link mx-3">
        <a href='#' className='nav-link'>
          <Facebook/>
        </a>
      </div>

      <div className="social-link mx-3">
        <a href='#' className='nav-link'>
          <Tiktok/>
        </a>
      </div>

      <div className="social-link mx-3">
        <a href='#' className='nav-link'>
          <Youtube/>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;