import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Free</PricingCardPlan>
                <PricingCardCost>Delivery</PricingCardCost>
                <PricingCardLength>service</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>on Orders $20+</PricingCardFeature>
                  <PricingCardFeature>Right From Kitchen</PricingCardFeature>
                  <PricingCardFeature>Within Minutes</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Order now</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Free</PricingCardPlan>
                <PricingCardCost>Pick Up</PricingCardCost>
                <PricingCardLength>service</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Fresh Food</PricingCardFeature>
                  <PricingCardFeature>Right From Kitchen</PricingCardFeature>
                  <PricingCardFeature>Within Minutes</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Order Now</Button> */}
              </PricingCardInfo>
            </PricingCard>
            {/* <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
