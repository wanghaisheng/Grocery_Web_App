import React, { useState } from 'react';
import { assets } from '../../assests/assets';
import './LoginPopUp.css';
import * as Realm from 'realm-web';

const Signin = ({ setIsSignin }) => {
  const [currstate, setCurrstate] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const app = new Realm.App({ id: 'your-realm-app-id' }); // Replace with your Realm App ID
    const credentials = Realm.Credentials.anonymous();

    try {
      // Log in anonymously first (this can be replaced with email/password sign-in if needed)
      const user = await app.logIn(credentials);

      // Call the MongoDB Realm function to insert user data
      const result = await user.functions.signUpUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert("Account created successfully");
    } catch (error) {
      console.error("Failed to sign up:", error);
      alert("Failed to create account. Try again.");
    }
  };

  const handleLogin = async () => {
    const app = new Realm.App({ id: 'your-realm-app-id' });

    try {
      const credentials = Realm.Credentials.emailPassword(formData.email, formData.password);
      const user = await app.logIn(credentials);

      alert("Logged in successfully");
    } catch (error) {
      console.error("Failed to log in:", error);
      alert("Login failed. Check your credentials.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currstate) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <div className='popup'>
      <form className='popup-container' onSubmit={handleSubmit}>
        <div className='popup-title'>
          <h2>{currstate ? 'Sign Up' : 'Login'}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setIsSignin(false)} />
        </div>
        {currstate &&
          <div className='input-group'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder='Your name'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        }

        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder='Your Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className='popup-btn'>{currstate ? "Create an account" : "Log In"}</button>

        <div className='popup-term'>
          <input type="checkbox" />
          <label htmlFor="login">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>

        <div className='popup-link'>
          <p>{currstate ? 'Already have an account?' : 'Create a new account?'}</p>
          <span onClick={() => setCurrstate(!currstate)}>{currstate ? 'Login here' : 'Click here'}</span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
