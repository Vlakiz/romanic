import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import Button from 'react-bootstrap/Button';
import { Calendar } from 'react-bootstrap-icons';
import clsx from 'clsx';

const BookBlock = () => {
  const { t } = useTranslation('footer');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={clsx('book-card p-4 rounded-3 gradient-border shadow-sm mb-3 mb-lg-0 d-inline-block text-center opacity-0', {
                     'appear-from-right': inView,
                     'opacity-100': inView
                   })}
    >
      <h5 className='text-uppercase mb-3'>
        {t('book')}
      </h5>
      <p className='mb-0'>
        <Button variant="outline-dark text-uppercase fs-6 px-4 py-3 shadow" id='book-button' size="lg">
          <span className='d-flex align-items-center'>
            <Calendar className='me-2'/>
            Booksy
          </span>
        </Button>
      </p>
    </div>
  );
};

export default BookBlock;