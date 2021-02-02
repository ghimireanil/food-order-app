import React from 'react';
import { StateProvider } from '../../MyCart/StateProvider';
import reducer, { initialState } from '../../MyCart/reducer';
import Header from '../../MyCart/Header/Header';
import { RestaurantMain } from '../../RestaurantDetail/RestaurantMain';
import { SearchMain } from '../../RestaurantSearch/SearchMain';

function Resturants() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header />
        <SearchMain>
          <RestaurantMain />
        </SearchMain>
      </StateProvider>
    </>
  );
}

export default Resturants;
