import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import OfferList from '../OfferList/OfferList';

const ServicesPage = () => {
  const { i18n } = useTranslation('header');
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/price-${i18n.language}.json`);
        if (!response.ok) {
          throw new Error("Error loading data");
        }
        const data = await response.json();
        setPriceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [i18n.language])

  return (
    <div id="services-page" className='mb-3'>
      <div id="price-list" className='mx-1 mx-lg-5 px-lg-5 my-2'>
        <div className="row mb-3 text-uppercase fw-bold fs-2 mb-lg-5">
          <div className="col-12 text-center border-bottom">
            Price
          </div>
        </div>
        <OfferList priceData={priceData} error={error} loading={loading}/>
      </div>
    </div>
  );
};

export default ServicesPage;