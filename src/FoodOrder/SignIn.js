import React from 'react';
import Thali from './Images/thali.png';

const SignIn = () => {
  return (
    <div>
      <div className='signin-picture'>
        <img src={Thali} className='signin-picture' />
      </div>
      <form className='signin-form'>
        <h1>Please sign in using your credentials</h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>

        <button type='submit'>Sign In</button>
        <span>
          <a href='/signup'>Forgot Password</a>
        </span>
        <span>
          Do not have an account? Sign Up <a href='/signup'>here</a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
