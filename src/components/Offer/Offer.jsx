import React from 'react';

const Offer = ({ item }) => {
  return (
    <div class="price-item row text-uppercase py-3 mx-lg-5 px-lg-5">
      <div className='col-9'>{item.name}</div>
      <div className='col-3 d-flex align-self-center justify-content-end'>{item.price} zł</div>
      {item.additions && item.additions.map((additionItem) => (
        <div class="addition-item row pt-2">
          <div className="ps-5 col-6">{additionItem.name}</div>
          <div className="col-6 d-flex align-self-center justify-content-end">+ {additionItem.price} zł</div>
        </div>
      ))}
    </div>
  );
};

export default Offer;