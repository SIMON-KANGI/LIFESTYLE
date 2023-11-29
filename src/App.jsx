import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useClipboard, useDisclosure } from '@chakra-ui/react'
import Home from './Components/Home';
import Plan from './Components/Plan';
import Book from './Components/Book';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Products from './Components/Products';
import Terms from './Components/Terms';
import Payement from './Components/payement';
import './App.css'
import { Suspense } from 'react';
import ShopPage from './Components/ShopPage';
import Login from './Components/Login';
import ErrorBoundary from './Components/ErrorBoundary';
import { useState } from 'react';
function App() {
 

  return (
    <>
 <Suspense fallback={<div id="sus-fullback">
 <p>...</p>
 </div>}>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Plan" element={<Plan />}/>
     <Route path="/Book" element={<Book/>}/>
     <Route path="/Shop" element={<Shop/>}/>
     <Route path="/Blog" element={<Blog/>}/>
     <Route path="/Products" element={<Products/>}/>
     <Route path="/Terms" element={<Terms/>}/>
     <Route path="/Payement" element={<Payement/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/ShopPage" element={<ShopPage/>}/>
  
     </Routes>
     </Suspense>
   
  
 
     
    </>
  )
}

export default App
