import React from 'react';

import { Nav } from './Nav';
import { Menu } from './Menu';
import { Gallery } from './Gallery';
//import { Review } from "./Review";
import { OrderOnline } from './OrderOnline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MenuList } from '../RestaurantDetail/MenuList';
import { ReviewList } from '../RestaurantDetail/ReviewList';
import { ReviewMain } from '../RestaurantDetail/ReviewMain';
import HomeCart from '../MyCart/Home/HomeCart';
export const Routing = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route path="/" exact component={Gallery} /> */}
          <Route path='/Review' component={ReviewMain} />

          <Route path='/Menu' component={MenuList}>
            <HomeCart />
          </Route>
          <Route path='/OrderOnline' component={MenuList} />
        </Switch>
      </div>
    </Router>
  );
};
