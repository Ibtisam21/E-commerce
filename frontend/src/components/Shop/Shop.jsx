import './Shop.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function Shop() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => {
        setProducts(res.data)
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

  console.log(products)

  return (
    <>

      {/* <h1>Shop</h1>
      <section id='header'>
        <a href="#"><img src="public/logo.png" className='logo' alt="" /></a>
        <div>

        </div>
      </section> */}

      <section id='page-header'>
        <h2>#Stayhome</h2>
        <p>save more with coupons and 70%off</p>
      </section>

      <section id='product1' className="section-1">
        <div className='pro-container'>

          {products.length > 0 ? products.map(p => (
            <div className='pro' key={p._id}>
              {/* 1000000 */}
              <img src={p.img} alt="" width="20px" height="260px" />
              <div className='des'>
                <span><b>{p.name}p</b></span>
                {/* let text = "How are you doing today?";
                const myArray = text.split(" ");
                let word = myArray[1]; */}
                {/* <p>{p.desc}</p> */}
                <div className='star'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
                <h4>{p.price}</h4>
              </div>
              <Link to={`/blog/${p._id}`}>
                <i className='fal fa-shopping-cart cart'></i>
              </Link>
            </div>
          )) : null}

          {/* 
          <div className='pro' onClick="window.location.href='blog.jsx">
            <img src="public/f1.jpg" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>
          <div className='pro'>
            <img src="/public/f2.jpg" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>
          <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>
          <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>

          <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>
          <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div>
          <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div> */}
          {/* <div className='pro'>
            <img src="/img/pic1" alt="" />
            <div className='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i className='fal fa-shopping-cart cart'></i></a>
          </div> */}
        </div>
      </section>
      <section id='pagination' className='section-p1'>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">icon</a>
      </section>
      <section id='newsletter' className='section-p1 section-m1'>
        <div className='newstext'>
          <h4>Sign up for Newsletter</h4>
          <p>Get E-mail updates about our latest special offers</p>
        </div>
        <div className='form'>
          <input type="text" placeholder='Your email address' />
          <button className='normal'>Sign Up</button>
        </div>
      </section>

      <footer className='section-p1'>
        <div className='col'>
          <img className='logo' src="" alt="" />
          <h4>Contact</h4>
          <p><strong>Address: </strong>562 Riffa Al-hunaniyah</p>
          <p><strong>Phone: </strong>+973-34569823</p>
          <p><strong>Hours: </strong>10:00am - 18:00pm, Mon-sat</p>
          <div className='follow'>
            <h4>Follow us</h4>
            <div className='icon'>
              <i className='fab fa-facebook-f'>fbook</i>
              <i className='fab fa-facebook-f'>Insta</i>
              <i className='fab fa-facebook-f'>Twit</i>
              <i className='fab fa-facebook-f'>Ytube</i>
            </div>
          </div>
        </div>

        <div className='col'>
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Privacy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Contact us</a>
        </div>

        <div className='col'>
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className='col install'>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className='row'>
            <img src="public/f1.jpg" alt="" />
            <img src="public/f1.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="public/f2.png" alt="" />
        </div>

        <div className='copyright'>
          <p>c 2021, Tech2 etc - Ibti</p>
        </div>
      </footer>
    </>
  )
}
