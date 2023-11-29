import React from 'react'
import Navbar from './Navbar'
import image1 from '../assets/image 67.jpg'
import image2 from '../assets/image 60.jpg'
import image3 from '../assets/image 68.jpg'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import '../Styles/products.css'
import Cart from './Cart'
function Products() {
  const proItems=[
    {
      image:image1,
      name:'Fundamentals of HTML for Beginners',
      details:'',
      price:'KES 750.00'
    },
    {
      image:image2,
      name:'Morning Ritual | MEN',
      details:'30 Days',
      price:'KES 500.00 or 4 plans available'
    },
    {
      image:image3,
      name:'Morning Ritual | WOMEN',
      details:'30 Days',
      price:'KES 500.00 or Feminine plan available'
    },
  ]
  const ProDetails=[
    {
      image:image1,
      name:'Fundamentals of HTML for Beginners',
      details:'',
      price:'KES 750.00',
      about:'This program has been designed to teach participants how to create their own web layouts using interactive web development technologies. It will cover the use of HTML5 to develop the basic structure of a website. This program will guide the individuals through designing the layout, adding text and images, and creating links and buttons on a web page.'
    },
    {
      image:image2,
      name:'Morning Ritual | MEN',
      details:'30 Days',
      step1:'Get a certificate by completing the program.',
      sep2:'Everyone who has completed all the steps will get a badge when the program ends.',
      price:'KES 500.00 or 4 plans available',
      about:'The Morning Ritual is a 30-day morning routine that will revolutionize your mornings. The program will build your physical stamina, fortify your mind and purify your spirit to win the battles of the day.Enrol in this program to build new habits, learn new skills and rise above the rest. At the end of this program, you will earn a badge of honour and a certificate as a testament to your dedication to becoming a better person.'
    },
    {
      image:image3,
      name:'Morning Ritual | WOMEN',
      details:'30 Days',
      price:'KES 500.00 or Feminine plan available'
    },
  ]
  return (
    <div>
      <Navbar/>
      <Cart/>
      <h1>Programs</h1>
      <div className='container-fluid' id="proitem">
      {
        proItems.map((item, name)=>{
          return(
            <Card key={name} id="procard">
            <img id="proimg" src={item.image} alt=""/>
            <h3>{item.name}</h3>
            <p>{item.details}</p>
            <hr/>
            <p id="proprice">{item.price}</p>
            <button className='text-center' id="probtn">Join</button>
            
            </Card>
          )
        })
      }
      </div>
     <Footer/>
    </div>
  )
}

export default Products
