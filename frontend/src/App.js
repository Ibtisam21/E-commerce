import './App.css';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile';
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import React, { Component } from 'react'
import Home from './components/Home/Home'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Account from './components/Account/Account'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  let token = localStorage.getItem('token')
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token != null) {
      let user = jwt_decode(token); //storing in user variable because its user object 

      if (user) {
        setIsAuth(true);
        setUser(user)
      }
      else if (!user) {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])


  const registerHandler = (user) => {
    axios.post("http://localhost:4000/auth/signup", user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  }

  const loginHandler = (cred) => {
    axios.post("http://localhost:4000/auth/signin", cred)
      .then(res => {
        console.log(res.data.token)

        // Store the token in Local Storage.
        if (res.data.token != null) {
          localStorage.setItem("token", res.data.token);
          let user = jwt_decode(res.data.token);
          setIsAuth(true);
          setUser(user);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault(); //to pervent
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

  return (
    //Java Logic here
    <>
      {/* //html logic here */}
      <Router>
        <div>
          <ul class="navbar">
            <li> <Link to="/">Home</Link>&nbsp;</li>
            <li> <Link to="/About">About</Link>&nbsp;</li>
            {/* <Link to="/Contact">Contact us</Link>&nbsp; */}
            <li><Link to="/Blog">product</Link>&nbsp;</li>
            <li><Link to="/Shop">Shop</Link>&nbsp;</li>
            <li><Link to="/Cart">Cart</Link>&nbsp;</li>
            {/* <Link to="/Account">Account</Link>&nbsp; */}
            <li><Link to="/Signup">Sign up</Link>&nbsp;</li>
            <li><Link to="/signin">Login</Link>&nbsp;</li>
          </ul>
        </div>
        {/* <Home/> */}
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<HomePage />} />
          <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
          {/* <Route path="/signin" element={<Signin ></Signin>} /> */}
          <Route path="/signin" element={token !== null ? <HomePage></HomePage> : <Signin ></Signin>} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/account" element={<Account />}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
