import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import FindResturants from './FindResturants';
import Main from './Main';
import Nav from './Nav';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './mystyle.css';

const Home = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path='/findResturant' component={FindResturants} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/homepage' component={Main} />
      </div>
    </Router>
  );
};

export default Home;
