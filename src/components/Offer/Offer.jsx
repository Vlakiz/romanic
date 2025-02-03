import React from 'react';

const Offer = ({ item }) => {
  return (
    <div className="price-item row text-uppercase mx-lg-5 px-3 px-lg-5 pb-4 mb-1">
      <div className='col-9'>{item.name}</div>
      <div className='col-3 d-flex align-self-center justify-content-end'>{item.price} zł</div>
      {item.additions && item.additions.map((additionItem, i) => (
        <div className="addition-item row pt-2" key={i}>
          <div className="ps-5 col-9">{additionItem.name}</div>
          <div className="col-3 d-flex align-self-center justify-content-end">+ {additionItem.price} zł</div>
        </div>
      ))}
    </div>
  );
};

export default Offer;