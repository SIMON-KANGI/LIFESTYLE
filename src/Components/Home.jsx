import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image 3.jpg'
import image3 from '../assets/image 58.jpg'
import image4 from '../assets/image 8.jpeg'
import image5 from '../assets/image 4.jpg'
import image6 from '../assets/image 59.jpg'
import image7 from '../assets/image 60.jpg'
import image8 from '../assets/image 6.jpg'
import image9 from '../assets/man1.jpg'
import image10 from '../assets/man2.jpg'
import image11 from '../assets/man3.jpg'
import image12 from '../assets/image 23.jpg'
import {PiQuotesFill} from 'react-icons/pi'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Box, Grid, Flex } from "@chakra-ui/react"
import '../Styles/home.css'
function Item1(){
  return(
    <div className='hero'>
    <img src={image1} alt=""/>
    <div className='hero-text'>
    <h1>Men's Health <br/>Made Easy.</h1>
    <button id="btn" className='btn'><Link to="/Plan">Get in Touch</Link></button>
    </div>
    
    </div>
  )
}
function Bio(){
  return(
    <div className='bio' id="bio">
    <h1>Bio</h1>
    <div id="left">
    <h4>Proffessional Consulting</h4>
    <p>I am a certified medical specialist in reproductive health. I’m here to lighten the load off<br/> your shoulders.
     I am here to help you lose weight and stay fit. I am keen on men's health but I also<br/> help women.
      My areas of consultancy are Obesity, Diabetes and sexual health. I also help<br/> men beat addiction towards pornography, masturbation, 
    smoking and alcohol. I work with a <br/>team of honest professional consultants. </p>
    </div>
    </div>
  )
}
function Mental(){
  return(
    <div id="mental">
    <section className='text-center' id="left-side">
    <h1 style={{fontSize:"3.5rem",paddingTop:"10rem"}}>Mental health,<br/>Mental wealth.</h1>
    <p style={{fontSize:"1.2rem", paddingTop:"3rem"}}>Mindfulness practice helps individuals develop a<br/> greater capacity to be 
    aware of their thoughts,<br/> feelings and actions in real time. So often our<br/> minds
     run on autopilot and we are left feeling that<br/> we are not in control or our own thoughts, 
     leading<br/> to greater stress and anxiety. Mindfulness practice<br/> aims to slow down this 
    process which enables us <br/>to regain
     focus and a better sense of control over<br/> our thoughts.</p>
     <button id="btn-left">Learn More</button>
    </section>
    <section id="right-side">
    <img src={image2} alt=""/>
    </section>
    </div>
  )
}

function Nutrition(){
return( 
  <div id="nutrition">
  {/*<div id="center-img"> 
  <img  src={image4} alt=""/>
</div>*/}
 
  <section id="n-left">
  <img className='img-fluid' src={image3}  alt=""/>
   </section>
   <section className='text-center' id="n-right">
   <h1 className='text-center'>
   Nutrion<br/>Assesments &<br/>Counselling
   </h1>
   <p className='text-center'>Amerix also helps clients to create healthier eating habits<br/> and eating schedules. 
   Because addiction affects other<br/> aspects of our lives not even related to our addiction,<br/> cooking and healthy 
   eating habits often fall by the<br/> wayside. Our certified dietitian and nutritionist meets with<br/> clients to assess 
   physical health, and creates a plan to <br/>achieve individual goals. Assessment 
   for history or<br/> development of an eating disorder is also performed to<br/> ensure the best care for our clients.</p>
   <button id="n-btn">Learn More</button>
   </section>

  </div>
)
 
}

function Programs(){
return(
  <div id="programs">
  <h1 className='text-center'>My Programs</h1>
  <div id="pg">
   <section id="p-left">
  <img src={image5} alt=""/>
  <div id="p-text">
  <h4>Warrior Club</h4>
  <p>Men battling sex problems,<br/> obesity, depression, addiction.</p>
  <button id="p-btn">View More</button>
  </div>
  </section>
  <section id="p-right">
  <section id="p-top">
  <img src={image6} alt=""/>
  <div id="top-text">
  <h4>Diabetes Clinic</h4>
  <p>This clinic helps you to manage<br/> Diabetes Mellitus Type II<br/>
Valid for 12 weeks</p>
  <button id="p-btn">View More</button>
  </div>
  </section>
  <section id="p-bottom">
  <img src={image7} alt=""/>
  <div id="bottom-text">
  <h4>UltimateChallenge90</h4>
  <p>Advanced paln for fat loss <br/> and lean muscles<br/></p>
  <button id="p-btn">View More</button>
  </div>
  </section>
  </section>
  </div>
 
  </div>
)
}
function Fraternity(){
  return(
    <div id="fraternity">
    <img src={image8} alt=""/>
    <section id="fra-text">
<h1>#FraternityCode</h1>
<p>Lose weight, look great in 90 days of transformation. Valid for 3<br/> months. program includes, </p>
<ul>
<li>Proper diet</li>
<li>Physical Workouts</li>
</ul>
<button id="fra-btn">Read More</button>
    </section>
    </div>
  )
}
function Clients(){
  return(
<div id="clients">
<h6 className='text-center' style={{fontSize:"2rem", paddingTop:"10rem"}}>Happy Clients</h6>
<h1 className='text-center' style={{fontSize:"3rem"}}>What they're saying</h1>
<section id="says">
<Box id="client1">
<PiQuotesFill  id="quote"/>
<p  style={{color:"white", marginTop:"2rem"}}>
Great service, positive experience.<br/> Very professional Doctor.</p>
<img src={image9} alt=""/>
<h3 style={{color:"white", marginTop:"2rem"}}>Richard Mbugua</h3>
</Box>
<Box id="client2">
<PiQuotesFill  id="quote"/>
<p style={{color:"white", marginTop:"2rem"}}>
Was very fast to get the doctor<br/> appointment! I really loved!</p>
<img src={image10} alt=""/>
<h3 style={{color:"white", marginTop:"2rem"}}>James Nzomo</h3>
</Box>
<Box id="client3">
<PiQuotesFill  id="quote"/>
<p style={{color:"white", marginTop:"2rem"}}>

I was once obese, big tummy and<br/> shapeless.
<br/>
Thank you Amerix!</p>
<img src={image11} alt=""/>
<h3 style={{color:"white", marginTop:"2rem"}}>Isaah Khaleed</h3>
</Box>
</section>
</div>

  )
}
function Safe(){
  const [input, setInput]= useState('')
   const handleSubmit=()=>{
    alert(input)
   }
  return(
    <div id="safe-cont">
    <div id="safe"> 
     <section id="s-left">
    <h2>You Are in Safe Hands</h2>
    <p style={{fontSize:"1rem"}}>Tens of thousands of people have trusted Amerix with their healthcare needs and<br/> we take pride in providing the best service.</p>
    <ul>
    <li style={{fontSize:"1.2rem"}}><span id="list" style={{fontWeight:"600", color:"black", fontSize:"1"}}>Data Science</span><br>
    </br>Patient notes are encrypted & data storage is audited by independent bodies<br/> to maintain safety.
    </li>
    <li style={{fontSize:"1.2rem"}}><span id="list" style={{fontWeight:"600", color:"black", fontSize:"1"}}>Confidentiality</span><br>
    </br>Patient notes are encrypted & data storage is audited by independent bodies<br/> to maintain safety.
    </li>
    <li style={{fontSize:"1.2rem"}}><span id="list" style={{fontWeight:"600", color:"black", fontSize:"1"}}>100% 0nline</span><br>
    </br>Patient notes are encrypted & data storage is audited by independent bodies<br/> to maintain safety.
    </li>
    
    </ul>
    </section>
    <section id="s-right">
    <img src={image12} alt=""/>
    
    </section>
    </div>
    <section id="sub"> 
    <h2 style={{paddingTop:"5rem", paddingLeft:"0rem"}}>Subscribe to our Mailing List</h2>
    <input id="subscribes" value={input} type="email" onChange={(e)=>setInput(e.target.value)} placeholder='Enter your Email'/>
    <br/>
    <button id="submit" type="submit" onClick={handleSubmit}>Submit</button>
    </section>
 
    </div>
  )
}
function Better(){
  return(
    <div id="better">
    <h1 id="bet-h1" style={{color:"white", paddingTop:"5rem"}} className='text-center'>Lets All get<br/>
    <span id="bet-span" style={{color:"white", textDecoration:"underline"}}>#BetterTogether</span>
    </h1>
    </div>
  )
}
function Home() {
  return (
    <div className='container-fluid'>
      <Navbar/>
  <section id="parts">
  <Item1/>
<Bio/>
<Mental/>
<Nutrition/>
<Programs/>
<Fraternity/>
<Clients/>
<Safe/>
<Better/>
<Footer/>
</section>

    </div>
  )
}

export default Home
