// import React, { useEffect } from 'react';
// import Header from './Header/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Checkout from './Checkout/Checkout';
// import Login from './LogIn/Login';
// import Payment from './Checkout/Payment/Payment';
// import Orders from './Checkout/Orders/Orders';
// import { auth } from './Firebase';
// import { useStateValue } from './StateProvider';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import HomeCart from './Home/HomeCart';
// import { Footer, Navbar } from '../components';
// import Home from '../pages/HomePage/Home';
// import Services from '../pages/Services/Services';
// import Resturants from '../pages/Resturants/Resturants';
// import { Main } from '../FetchMain/Main';
// import { RestaurantMain } from '../RestaurantDetail/RestaurantMain';
// import { SearchMain } from '../RestaurantSearch/SearchMain';
// import { StateProvider } from './StateProvider';
// import reducer, { initialState } from './reducer';

// const promise = loadStripe(
//   'pk_test_51IFBrCDt9qUPrgHqT9SPGO3mpqrWzokYnrjCjaDmkVjK7vNuFaIhKDD5nJrr7BAPuJiy3l0vO5s5qF9wy9yb8OEa00kY5ecoAi'
// );

// function Cart() {
//   // const [{}, dispatch] = useStateValue();
//   const [{ basket, user }, dispatch] = useStateValue();
//   useEffect(() => {
//     // will only run once when the app component loads...

//     auth.onAuthStateChanged((authUser) => {
//       console.log('THE USER IS >>> ', authUser);

//       if (authUser) {
//         // the user just logged in / the user was logged in
//         dispatch({
//           type: 'SET_USER',
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: 'SET_USER',
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className='app'>
//         <Switch>
//           <Route path='/' exact component={Home}>
//             <Navbar />
//             <Home />
//             <Footer />
//           </Route>

//           <Route path='/services' component={Services}>
//             <Navbar />
//             <Services />
//             <Footer />
//           </Route>

//           <Route path='/resturants' component={Resturants} />

//           <Route path='/login' component={Login}>
//             <Login />
//           </Route>

//           <Route path='/orders' component={Orders}>
//             <Navbar />
//             <Orders />
//           </Route>

//           <Route path='/checkout' component={Checkout}>
//             <Header />
//             <Checkout />
//           </Route>

//           <Route path='/payment' component={Payment}>
//             <Header />
//             <Elements stripe={promise}>
//               <Payment />
//             </Elements>
//           </Route>

//           <Route path='/SearchMain' exact component={SearchMain}>
//             <StateProvider initialState={initialState} reducer={reducer}>
//               <Header />
//               <SearchMain />
//             </StateProvider>
//           </Route>

//           <Route path='/SearchMain/:id' component={RestaurantMain}>
//             <StateProvider initialState={initialState} reducer={reducer}>
//               <Header />
//               <RestaurantMain />
//             </StateProvider>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default Cart;
