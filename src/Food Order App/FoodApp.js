import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Resturants from './pages/Resturants/Resturants';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import { SearchMain } from './RestaurantSearch/SearchMain';
import { RestaurantMain } from './RestaurantDetail/RestaurantMain';
import Header from './MyCart/Header/Header';
import { StateProvider } from './MyCart/StateProvider';
import reducer, { initialState } from './MyCart/reducer';
import Login from './MyCart/LogIn/Login';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './MyCart/Checkout/Checkout';
import Payment from './MyCart/Checkout/Payment/Payment';
import Orders from './MyCart/Checkout/Orders/Orders';

function FoodApp() {
  const promise = loadStripe(
    'pk_test_51IFBrCDt9qUPrgHqT9SPGO3mpqrWzokYnrjCjaDmkVjK7vNuFaIhKDD5nJrr7BAPuJiy3l0vO5s5qF9wy9yb8OEa00kY5ecoAi'
  );
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path='/services' component={Services}>
          <Navbar />
          <Services />
          <Footer />
        </Route>

        <Route path='/resturants' component={Resturants} />
        <Route path='/login' component={Login}>
          <Login />
        </Route>

        <Route path='/' exact component={Home}>
          <Navbar />
          <Home />
          <Footer />
        </Route>

        <Route path='/SearchMain/:id' component={RestaurantMain}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Header />
            <RestaurantMain />
          </StateProvider>
        </Route>

        <Route path='/SearchMain' exact component={SearchMain}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Header />
            <SearchMain />
          </StateProvider>
        </Route>

        <Route path='/orders' component={Orders}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Navbar />
            <Orders />
          </StateProvider>
        </Route>

        <Route path='/checkout' component={Checkout}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Header />
            <Checkout />
          </StateProvider>
        </Route>

        <Route path='/payment' component={Payment}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </StateProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default FoodApp;
