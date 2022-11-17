import './Cart.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';


export default function Cart() {

  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [cop, setCop] = useState("");

  const addToCart = (e) => {
    e.preventDefault()
    if (e.target.value == "Alex") {
      setCop(e.target.value)
      // alert("congradulations, your order is placed")
    }
    else {
      // alert("You are not a GA student.")
    }

  }

  console.log(cop)

  const addCop = () => {
    if (cop == "Alex") {
      alert("congradulations, your order is placed")
    }
    else {
      alert("You are not a GA student.")
    }
  }




  const getItems = () => {
    let token = localStorage.getItem("token");

    if (token != null) {
      let user = jwt_decode(token); //storing in user variable because its user object 

      if (user) {
        setUser(user)
      }
      console.log(user)

      axios.get(`http://localhost:4000/getOrdersbyUser/${user.user.id}`)
        .then(res => {
          setOrders(res.data)
          console.log(res.data);
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  const deleteItem = (id) => {
    // let token = localStorage.getItem("token");
    // let user = jwt_decode(token); //storing in user variable because its user object 
    // debugger
    axios.delete(`http://localhost:4000/order/${id}`)
      .then((res) => console.log(res.data))
      .then(() => getItems())
  }

  console.log(orders)
  console.log(user)

  return (
    <>
      {/* <h1>cart</h1>
      <section id='header'>
        <a href="#"><img src="public/logo.png" className='logo' alt="" /></a>
        <div>

        </div>
      </section> */}

      <section id='page-header'>
        <h2>#Stayhome</h2>
        <p>save more with coupons and 70%off</p>
      </section>

      <section id='cart' class='section-p1'>
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {orders.length > 0 ? orders.map(o => (
                <div class='pro' key={o._id}>
                  <td onClick={() => deleteItem(o._id)}>cross</td>
                  <td><img src={o.img} alt="" class="imgcrl" /></td>
                  <td>{o.name}</td>
                  <td class="ali">{o.price}</td>
                  <td><input type="number" value={o.quantity} class="some" /></td>
                  {/* <h3>{o.name}</h3> */}
                  {/* <img src={o.img} alt="" /> */}
                  {/* <h3>{o.price}</h3> */}
                </div>
              )) : null}

            </tr>
          </tbody>
        </table>
      </section>

      <section id='cart-add' class='section-p1'>
        <div id='coupon'>
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" onChange={(e) => addToCart(e)} placeholder='Enter your Fav GA Instructor Name' />
            <button class="normal" onClick={(e) => addCop(e)}>Apply</button>
          </div>
        </div>

        <div id='Subtotal'>
          <h3>Carts Total</h3>
          <table>
            <tr>
              <td>Cart Total</td>
              <td>total pay</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>total amount</strong>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  )
}
