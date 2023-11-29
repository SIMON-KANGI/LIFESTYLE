import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import '../Styles/plan.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Box, Grid, Flex } from "@chakra-ui/react"
function Payement() {
  const [isLoggenIn, setIsLoggedIn]= useState(false)

  function onChange(e){
    e.preventDefault()
    setIsLoggedIn(true)
  }
  function handleSubmit(){
    if(isLoggenIn){
      return alert("email submitted")
    }else{
      return alert("please provide the email")
    }
  
  }
  return (
    <div>
      <Navbar/>
      <div id="title" className='text-center'>
      <h1 id="price">Plan & Pricing</h1>
      </div>
      <div className='container'>
      <h4 id="customer">Checkout</h4>
      <hr/>
      <div  id="customer">
      <div id="cus-left">
      <h4>1 Customer Details</h4>
      <span id="log">All ready have an account?<Link>Login </Link>for faster checkout</span>
      <h6>___________________or Continue as guest_________________________</h6>
      <div id="input">
      <h6>Email*</h6>
      <input type="email" value={isLoggenIn} onChange={onChange} id="email" required/>
      <br/>
      <button id="pay" onClick={handleSubmit} type="submit">Get Plan</button>
      </div>
      </div>
      <div id="cus-right">
      <Box id="sum">
      <h1>Order Summary</h1>
      <h5>Afya Club</h5>
      <br/>
      <p>Duration: Untill Cancelled</p>
      <hr/>
      <h6>Total <span>KES 0.00</span></h6>
      </Box>
      
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payement
