import React, { useState, useEffect } from 'react';
import { axios } from '../Api/axios';
import { Image } from './Image';
import { MenuList } from './MenuList';
import { RestaurantDetail } from './RestaurantDetail';
import { ReviewList } from './ReviewList';
import { Routing } from '../Route/Routing';
import './RestaurantDetail.module.css';
import { useParams } from 'react-router-dom';

export function RestaurantMain() {
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState([]);
  let { id } = useParams();

  useEffect(async () => {
    const response = await axios.get(`/restaurant/details/${id}`);
    console.log(response.data.data);
    setRestaurant(response.data.data);
  }, []);

  useEffect(async () => {
    const response = await axios.get(`/restaurant/review/${id}`);
    console.log(response.data.data);

    setReview(response.data.data);
  }, []);
  // console.log(id);

  return (
    <div className='App'>
      <div>
        <Image image={restaurant.banner_image} />
        <Routing />
        {Object.keys(restaurant).length > 0 ? (
          <div>
            <RestaurantDetail
              address={
                <ul>
                  <li>
                    {restaurant.address.area}, {restaurant.address.district}
                  </li>
                </ul>
              }
              hours={
                <ul>
                  <li>
                    {restaurant.hour.start}-{restaurant.hour.end}
                  </li>
                </ul>
              }
              contact={restaurant.social.contact}
              features={
                <ul>
                  <li>
                    AC: {restaurant.features.ac ? '✅' : '❌'}
                    <br />
                    Delivery: {restaurant.features.delivery ? '✅' : '❌'}
                    <br />
                    Parking: {restaurant.features.parking ? '✅' : '❌'}
                    <br />
                    Smoking Zone:
                    {restaurant.features.smoking_zone ? '✅' : '❌'}
                    <br />
                    Wifi: {restaurant.features.wifi ? '✅' : '❌'}
                    <br />
                    Reservation:
                    {restaurant.features.reservation ? '✅' : '❌'}
                    <br />
                  </li>
                </ul>
              }
              foodReview={restaurant.review.food.toFixed(1)}
              envReview={restaurant.review.environment.toFixed(1)}
              priceReview={restaurant.review.price.toFixed(1)}
              serviceReview={restaurant.review.service.toFixed(1)}
              restType={restaurant.restaurant_type.map((type) => (
                <ul>
                  <li> {type}</li>
                </ul>
              ))}
              name={restaurant.name}
              review={
                <ul>
                  {restaurant.review.average.toFixed(1)}(
                  {restaurant.review.count})
                </ul>
              }
            />

            <MenuList
              id='menu'
              foodType={restaurant.menu.map((type) => (
                <ul>
                  <li>{type.type}</li>
                </ul>
              ))}
              foodName={restaurant.menu.map((name) => (
                <ul>
                  <li>{name.name}</li>
                </ul>
              ))}
              foodPrice={restaurant.menu.map((price) => (
                <ul>
                  <li>৳ {price.unit_price}</li>
                </ul>
              ))}
            />

            <ReviewList
              reviewUser={review.map((user) => (
                <ul>
                  <li
                    style={{
                      color: 'chocolate',
                      fontWeight: 'bolder',
                      marginLeft: '1rem',
                      fontSize: '25px',
                    }}
                  >
                    🦹🏼 {user.userId.username}:
                  </li>

                  {/* {(user.food + user.environment + user.service + user.price) /
                    4} */}
                </ul>
              ))}
              reviewAverage={review.map((user) => (
                <ul>
                  <li>
                    {(user.food +
                      user.environment +
                      user.service +
                      user.price) /
                      4}
                  </li>
                </ul>
              ))}
              reviewComment={review.map((comm) => (
                <ul>
                  <li
                    style={{
                      fontStyle: 'italic',
                      marginLeft: '2rem',
                      alignItems: 'center',
                    }}
                  >
                    ✍🏼 {comm.comment}
                  </li>
                </ul>
              ))}
            />

            {/* <img
              key={restaurant.id}
              style={{
                width: "300px",
                height: "200px",
                display: "inline-flex",
                flexDirection: "column",
              }}
              src={restaurant.images.map((image) => ({ image }))}
            /> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}
