import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Thali from '../images/thali.png';
import Variety from '../images/variety.png';
import Momo from '../images/momo.png';
import Sekuwa from '../images/sekuwa.png';
import Roti from '../images/roti.png';
import Featured from '../images/featured.png';

function HomeCart() {
  const [restaurants, setRestaurants] = useState([]);

  const renderRestaurants = useEffect(() => {
    fetch(
      `https://foodhub-api.herokuapp.com/restaurant/details/5cc1f333df245c427cc2664b`
    )
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response.data.menu);
        console.log(response.data.menu);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__row'>
          {restaurants.map(({ type, _id, unit_price, name, rating, image }) => (
            <Product
              key={_id}
              id={_id}
              title={type}
              price={unit_price}
              // image={image}
              restaurant={name}
              // rating={rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCart;
