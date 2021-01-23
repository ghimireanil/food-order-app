import React from 'react';
import { Link } from 'react-router-dom';

import {
  MainContainer,
  MainBtn,
  MainContent,
  MainH1,
  MainP,
  MainItems,
} from './MainElements';

const Main = () => {
  return (
    <MainContainer>
      <MainContent>
        <MainItems>
          <MainH1>Food Delivered to your door</MainH1>
          <MainP>In as less as 15 minutes</MainP>
          <Link to='/signin'>
            <MainBtn>Place Order</MainBtn>
          </Link>
        </MainItems>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
