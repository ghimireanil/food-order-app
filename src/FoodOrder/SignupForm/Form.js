import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSuccess';
import Momo from '../Images/momo.png';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img src={Momo} className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
