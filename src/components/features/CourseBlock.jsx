import React from 'react';
import clsx from 'clsx';

const CourseBlock = ({ heading, description, period, price, mb = false, className }) => {
  return (
    <div className={clsx("col-12 col-md-6 text-center", className, {
      'mb-2 mb-lg-0': mb
    })}>
      <h4 className='mb-3 fs-2 text-uppercase'>
        {heading}
      </h4>
      <p className='beauty-desc'>
        {description}
      </p>
      {period && <p className='beauty-desc'>
                   {period}
                 </p>}
      <p className='text-uppercase beauty-price'>
        {price} zł
      </p>
    </div>
  );
};

export default CourseBlock;