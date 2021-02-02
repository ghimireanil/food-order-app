import React, { useState, useEffect } from 'react';
import style from './SearchingRestaurant.module.css';
import { axios } from '../Api/axios';
import { SearchingRestaurant } from './SearchingRestaurant';
import { Link } from 'react-router-dom';

export function SearchMain() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRestaurants();
  }, [query]);

  const getRestaurants = async () => {
    const response = await axios.get(`/restaurant/search?food=${query}`);
    console.log(response.data.data);
    setRestaurants(response.data.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className={style.App}>
      <form onSubmit={getSearch} className={style.search_form}>
        <input
          placeholder='Search by food'
          className={style.search_bar}
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className={style.search_button} type='submit'>
          Search
        </button>
      </form>
      <div className='restro'>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <Link to={`/SearchMain/${restaurant._id}`}>
              <SearchingRestaurant
                key={restaurant.name}
                name={restaurant.name}
                image={restaurant.banner_image}
                address2={restaurant.address.district}
                address1={restaurant.address.area}
                review1={restaurant.review.average}
                review2={restaurant.review.count}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
