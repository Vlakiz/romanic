import React from 'react';
import clsx from 'clsx';

const FooterItem = ({ children, heading, className }) => {
  return (
    <div className={clsx('footer-block px-3 px-md-0 mb-5', className)}>
      {heading && (
        <h5 className='text-uppercase fw-semibold mb-3'>
          {heading}
        </h5>)}
      {children}
    </div>
  );
};

export default FooterItem;