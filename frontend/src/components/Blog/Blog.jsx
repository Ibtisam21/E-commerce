import './Blog.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [products, setProducts] = useState([])

  const navigate = useNavigate()
  let addToCart = () => {
    // alert(123)
    let token = localStorage.getItem('token')
    if (!size) {
      alert("please choose a size")
    } else {
      axios.post(`http://localhost:4000/cart/add`, {

        size,
        quantity,
        item_id: id,
        name: product.name,
        desc: product.desc,
        img: product.img,
        price: product.price

      }, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      },)
        .then(res => {
          // alert("Item successfully added to the cart")
          navigate('/cart')
        })
        .catch(err => {
          console.log(err)
        });
    }


    // get size
    //get quantity
    //make api call
  }
  let setItemSize = (event) => {
    setSize(event.target.value)
  }
  let setItemQuantity = (event) => {
    setQuantity(event.target.value)
  }
  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, [])
  return (
    <>

      {/* <h1>Products </h1>
      <section id='header'>
        <a href="#"><img src="public/logo.png" class='logo' alt="" /></a>
        <div>

        </div>
      </section> */}

      <section id='prodetails' class='section-p1'>
        <div class='single-pro-image'>
          <img src={product?.img} width="100%" id='MainImg' alt="" />
          {/* <div class='small-img-group'>
            <div class='small-img-col'>
              <img src={product.img} width="100%" class='small-img' alt="" />
            </div>
            <div class='small-img-col'>
              <img src={product.img} width="100%" class='small-img' alt="" />
            </div>
            <div class='small-img-col'>
              <img src={product.img} width="100%" class='small-img' alt="" />
            </div>
            <div class='small-img-col'>
              <img src="public/f5.jpg" width="100%" class='small-img' alt="" />
            </div> */}
          {/* </div> */}
        </div>
        <div class='single-pro-details'>
          <h6>Product Information </h6>
          <h4>{product?.category || 'No category'}</h4>
          <h2>{product?.name || 'No name'}</h2>
          <select name="" id="size"
            onChange={setItemSize} >
            <option value="">Select Size</option>
            {[32, 34, 40, 43].length > 0 ? [32, 34, 40, 43].map(size => (
              // {product?.size?.length > 0 ? product?.size?.map(size => (
              <option value={size}  >{size}</option>
            )) : null}


          </select>
          <input type="number" defaultValue={quantity} onChange={setItemQuantity} />
          <button class='normal' onClick={addToCart}>Add To Cart</button>

          <h4>Product Details</h4>
          <span>
            {product?.desc}
          </span>
        </div>
      </section>

      <section id='product1' class="section-1">
        <h2>Featured Products</h2>
        <p>Summer collection new Modern design</p>
        <div class='pro-container'>
          {products.length > 0 ? products.map(p => (
            <div class='pro'>
              <img src={p?.img} alt="" />
              <div class='des'>
                {/* <span>{</span> */}
                <h5>{p.name}</h5>
                <div class='star'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                </div>
                <h4>{p.price}</h4>
              </div>
              <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
            </div>
          )) : null}
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

      {/* <script>
          const MainImg = document.getElementById("MainImg");
          const smallimg = document.getElementByClassName("small-img");

          smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src
          }
          smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src
          }
          smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src
          }
          smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src
          }
        </script> */}

    </>
  )
}
