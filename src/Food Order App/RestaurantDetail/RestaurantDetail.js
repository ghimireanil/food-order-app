import React from 'react';
import style from './RestaurantDetail.module.css';

export function RestaurantDetail(props) {
  const {
    name,
    hours,
    address,
    contact,
    features,
    review,
    foodReview,
    envReview,
    priceReview,
    serviceReview,
    restType,
  } = props;

  return (
    <>
      <div className={style.restro}>
        <div className={style.text}>
          <strong>
            Address: <p> {address}</p>
            Business Hour: <p> {hours}</p>
            Contact: <p> {contact}</p>
          </strong>
        </div>
        <div>
          <div className={style.revHead}>
            <h1>{name} </h1>
            <p>{review}</p>
          </div>

          <div className={style.review}>
            <div className={style.rev}>
              <div>
                <strong> Food 🍔🍿🍛</strong>
                <p> {foodReview}</p>

                <strong> Environment☀⛈ </strong>
                <p> {envReview}</p>
              </div>
              <div>
                <strong> Price＄＄＄ </strong>
                <p> {priceReview}</p>
                <strong> Service🧑🏾‍🍳</strong>
                <p> {serviceReview}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.features}>
          <div className={style.commaList}> Type: {restType} </div>
          <div> {features}</div>
        </div>
      </div>
      <div className={style.menu}>
        <strong> Menu </strong>
        <img className={style.menuImage} src='/Images/menu.png' />
      </div>

      {/* <div className={style.gallery}>Gallery</div> */}
    </>
  );
}
