import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

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
        {priceData && priceData.map((item) => (<div class="price-item row text-uppercase py-3 mx-lg-5 px-lg-5">
            <div className='col-9'>{item.name}</div>
            <div className='col-3 d-flex align-self-center justify-content-end'>{item.price} zł</div>
            {item.additions && item.additions.map((additionItem) => (
              <div class="addition-item row pt-2">
                <div className="ps-5 col-6">{additionItem.name}</div>
                <div className="col-6 d-flex align-self-center justify-content-end">+ {additionItem.price} zł</div>
              </div>
            ))}
          </div>)
          )}
      </div>
    </div>
  );
};

export default ServicesPage;