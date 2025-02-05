import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import { useTranslation } from "react-i18next";

import Offer from './Offer';

const OfferList = ({ priceData, loading, error }) => {
  const { t } = useTranslation();

  if (error) {
    return (
      <div className='text-center d-flex justify-content-center'>
        <Alert variant='danger'>
          {t('errorLoadingData')}
        </Alert>
      </div>
    );
  } else if (loading) {
    return (
      <div className='text-center'>
        <Spinner animation="grow" />
      </div>
    );
  } else {
    return (
      <div className='mb-0 mb-lg-3'>
        {priceData && priceData.map((item, i) => <Offer item={item} key={i}/>)}
      </div>
    );
  }
};

export default OfferList;