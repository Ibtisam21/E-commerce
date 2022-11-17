import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home() {
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
      {/* <h1>Home</h1> */}
      {/* <section id='header'>
        <a href="#"><img src="public/logo.png" class='logo' alt="" /></a>
        <div>

        </div>
      </section> */}

      <section id='hero'>
        <h4>Trade in Offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>save more with coupons & up to 70% off!</p>
        <Link to='/shop'><button>Shop Now</button></Link>
      </section>

      <section id='product1' class="section-1">
        <h2>Featured products</h2>
        <p>Summer collection new Modern design</p>
        <div class='pro-container'>
          {products.length > 0 ? products.map(p => (
            <div className='pro' key={p._id}>
              {/* 1000000 */}
              <img src={p.img} alt="" width="20px" height="280px" />
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
          {/* <div class='pro'>
            <img src="images/f1.jpg'" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div> */}
          {/* <div class='pro'>
            <img src="/public/f2.jpg" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div> */}
        </div>
      </section>

      <section id='banner' class='section-m1'>
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span> - All t-shirts and accessories</h2>
        <button class='normal'>Explore More</button>
      </section>

      <section id='product1' class="section-1">
        <h2>New Arrivals</h2>
        <p>Summer collection new Modern design</p>
        <div class='pro-container'>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
          <div class='pro'>
            <img src="/img/pic1" alt="" />
            <div class='des'>
              <span>adidas</span>
              <h5>Cartoon astronaut T-shirts</h5>
              <div class='star'>
                {/* <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i> */}
              </div>
              <h4>74BHD</h4>
            </div>
            <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
          </div>
        </div>
      </section>

      <section id='sm-banner' class='section-p1'>
        <div class='banner-box banner-box2'>
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at Nigga Shop</span>
          <button class='white'>Learn More</button>
        </div>
        <div class='banner-box'>
          <h4>Spring/Summer</h4>
          <h2>Upcoming season</h2>
          <span>The best classic dress is on sale at Nigga Shop</span>
          <button class='white'>Collection</button>
        </div>
      </section>

      <section id='newsletter' class='section-p1 section-m1'>
        <div class='newstext'>
          <h4>Sign up for Newsletter</h4>
          <p>Get E-mail updates about our latest special offers</p>
        </div>
        <div class='form'>
          <input type="text" placeholder='Your email address' />
          <button class='normal'>Sign Up</button>
        </div>
      </section>

      <footer class='section-p1'>
        <div class='col'>
          <img class='logo' src="" alt="" />
          <h4>Contact</h4>
          <p><strong>Address: </strong>562 Riffa Al-hunaniyah</p>
          <p><strong>Phone: </strong>+973-34569823</p>
          <p><strong>Hours: </strong>10:00am - 18:00pm, Mon-sat</p>
          <div class='follow'>
            <h4>Follow us</h4>
            <div class='icon'>
              <i class='fab fa-facebook-f'>fbook</i>
              <i class='fab fa-facebook-f'>Insta</i>
              <i class='fab fa-facebook-f'>Twit</i>
              <i class='fab fa-facebook-f'>Ytube</i>
            </div>
          </div>
        </div>

        <div class='col'>
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Privacy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Contact us</a>
        </div>

        <div class='col'>
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div class='col install'>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class='row'>
            <img src="public/f1.jpg" alt="" />
            <img src="public/f1.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="public/f2.png" alt="" />
        </div>

        <div class='copyright'>
          <p>c 2021, Tech2 etc - Ibti</p>
        </div>
      </footer>
    </>
  )
}
