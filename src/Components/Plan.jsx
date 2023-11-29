import React from 'react'
import Navbar from './Navbar'
import '../Styles/plan.css'
import image1 from '../assets/image-1.jpg'
import { Box, Grid, Flex } from "@chakra-ui/react"
import Footer from './Footer'
import { Link,Routes, Route } from 'react-router-dom'
import Payement from './payement'
import Cart from './Cart'
function Plan() {
  const Boxstyles={
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    px:0,
    color:"black",
    border:"2px",
   
    boxSize:"300px",
    marginTop:"15rem"
  }
  return (
    <div>
    <Cart/>
      <Navbar/>
      <div id="title" className='text-center'>
      <h1 id="price">Plan & Pricing</h1>
 <Flex  bg="black" flexWrap='wrap' gap="15px" justifyContent="space-evenly">

 <Box  id="box" sx={Boxstyles} >
 <h4>Afya  Club</h4>
 <h1>Kes<span>0</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles}>
 <h4>Warrior Plan</h4>
 <h1>Kes<span>2000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>Valid for four months</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 <div id="box-iv" style={{marginTop:"3rem"}}>
 <p>Diet Plan</p>
 <hr/>
 <p>intermittent Fasting</p>
 <hr/>
 <p>Fitness training</p>
 <hr/>
 <p>Sexual Wellness</p>
 <hr/>
 <p>Mental Healthcare</p>
 </div>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>iRONPlan</h4>
 <h1>Kes<span>2500</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Feminine Plan</h4>
 <h1>Kes<span>2500</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Diabetic Clinic</h4>
 <h1>Kes<span>6000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Hypertension Clinic</h4>
 <h1>Kes<span>6000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Beast Mode</h4>
 <h1>Kes<span>2000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Gut Health Plan</h4>
 <h1>Kes<span>3000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Transformation Plan</h4>
 <h1>Kes<span>2000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Hormnal Health</h4>
 <h1>Kes<span>3000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Jumbo Junior club</h4>
 <h1>Kes<span>4000</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Premium</h4>
 <h1>Kes<span>250</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box id="box" sx={Boxstyles} >
 <h4>Platinum</h4>
 <h1>Kes<span>100</span></h1>
 <p>Entry level for both men and <br/>women</p>
 <p>free plan</p>
 <button id="select"><Link to="/Payement">Select</Link></button>
 </Box>
 <Box >
 
 </Box>
 
 </Flex>
  </div>
  <Routes>
  <Route path="/Payement" element={<Payement/>}/>
  </Routes>
  <Footer/>
    </div>
  )
}

export default Plan
