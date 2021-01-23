import React from 'react';
import Roti from './Images/roti.png';

const FindResturants = () => {
  return (
    <div className='find-resturants'>
      <input type='text' placeholder='Enter the location' />
      <button type='submit'>Look For Resturants</button>
      <img src={Roti} className='findResturant-picture' />
    </div>
  );
};

export default FindResturants;
