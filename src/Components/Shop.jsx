import React from 'react'
import Navbar from './Navbar'
import Items from './Items'
import Cart from './Cart'
import '../Styles/shopping.css'
import Footer from './Footer'
import Book from './Book'
import Login from './Login'

function Shop(props) {
  return (
    <div className='container-fluid' id="item-holder">
    
<Navbar/>
<Cart/>

      
      <section id="items">
      <Items/>
      </section>

     <Footer/>
    </div>
  )
}

export default Shop

