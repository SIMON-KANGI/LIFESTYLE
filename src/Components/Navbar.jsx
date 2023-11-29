import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, ModalBody } from '@chakra-ui/react'
import {GrClose} from 'react-icons/gr'
import Cart from './Cart'
import {BsBasketFill} from 'react-icons/bs'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react'
import Book from './Book'
import Login from './Login'
function Navbar() {
const {isOpen, onOpen, onClose} = useDisclosure()
const [size, setSize] = React.useState('md')
const Sizes=['full']

const handleSizeClick=(newSize)=>{
setSize(newSize)
onOpen()
}
const Pages=[
{
    name:"Home",
    path:'/'
},
{
    name:"Plan",
    path:'/Plan'
},

{
    name:"Shop",
    path:'/Shop'
},
{
    name:"Blog",
    path:'/Blog'
},
{
    name:"Products",
    path:'/Products'
},
{
    name:"Terms",
    path:'/Terms'
},


]
 return (
    <div className='container-fluid'>
    <header className='header'>
    <GiHamburgerMenu data-bs-toggle="nav" onClick={()=>handleSizeClick(Sizes)} className='bars' id="open"/>
    <h2 id="h2">LIFE<span style={{color:"red"}}>STYLE</span></h2>
    
    <nav id="nav-1" className="navbar navbar-expand-md">
    <h1>LIFE<span style={{color:"red"}}>STYLE</span></h1>
   <ul className='nav-items justify-content-center'>
      {
        Pages.map((page, name)=>{
            return <li key={name}><Link className='active' to={page.path}>{page.name}</Link></li>
        })
      }
      <Book/>
      
      <Login/>
      </ul>

      </nav>
      <section id="drawer">
      
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay >
      <DrawerContent 
       
      
      id="nav-bar">
      <DrawerBody >
      <nav className="navbar navbar-expand-md">
      <GrClose data-bs-toggle="nav" onClick={onClose} placement="left" id="close"/>
        <ul className="navbar-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Plan">Plan & Pricing</Link></li>
        <li><Link to="/Book"><Book/></Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Terms">Terms</Link></li>
        
        
        </ul>
        </nav>
      <hr/>
     
      </DrawerBody>
      
      
      </DrawerContent>
      
      
      </DrawerOverlay>
      
      
      
      
      </Drawer>
      
      </section>
    
      </header>
     
    </div>
  )
}

export default Navbar
