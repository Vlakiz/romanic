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
        // await new Promise((resolve) => setTimeout(resolve, 1500));
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
      <div id="price-list" className='mx-0 mx-lg-5 px-lg-5 my-4 rounded-2 shadow-sm py-4'>
        <div className="mb-5 text-uppercase fw-bold fs-2">
          <h2 className="text-center py-4 border-bottom">
            P r i c e
          </h2>
        </div>
        <OfferList priceData={priceData} error={error} loading={loading}/>
      </div>
    </div>
  );
};

export default ServicesPage;