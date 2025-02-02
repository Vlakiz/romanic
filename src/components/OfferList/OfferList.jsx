import React from 'react';
import Offer from '../Offer/Offer';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import { useTranslation } from "react-i18next";

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
      <>
        {priceData && priceData.map((item) => <Offer item={item} />)}
      </>
    );
  }
};

export default OfferList;