import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import '../Styles/cart.css'
import { useCart } from 'react-use-cart'
import {BsBasketFill} from 'react-icons/bs'
import { useRef } from 'react'
import { Button } from 'bootstrap'
function Cart() {
  const {isOpen, onOpen, onClose}= useDisclosure()
  const btnref=React.useRef()
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items
}= useCart();
if(isEmpty){
  
  return(
    <>
    <button id="basket" onClick={onOpen}><BsBasketFill /></button>

    <Drawer
    isOpen={isOpen}
  placement="right"
  onClose={onClose} 
  finalFocusRef={btnref}>

    <DrawerOverlay/>
    <DrawerContent>
<DrawerCloseButton/>
   
    <DrawerHeader id="drawerheader">
 
    <h1 className='text-center'>Cart</h1>
    </DrawerHeader>
    <DrawerBody>
    <h4>Cart is empty</h4>
    </DrawerBody>
    </DrawerContent>
    
    </Drawer>
    </>
  )
}
  return (
    <div>
  <BsBasketFill onClick={onOpen} id="basket"/>
  <Drawer
  isOpen={isOpen}
  placement="right"
  onClose={onClose} 
  finalFocusRef={btnref}>
<DrawerOverlay/>
<DrawerContent> 
<DrawerCloseButton onClick={onClose}/>
<DrawerHeader id="drawerheader">Cart</DrawerHeader>
 <DrawerBody>
  {items.map((item, id)=>{
return(
<div key={id}>
<img src={item.img} style={{height:"3rem"}} alt=""/>
<button onClick={()=>updateItemQuantity(item.id, item.quantity-1)} className='btn btn-info ms-2'>-</button>
<div>{item.quantity}</div>
    <button onClick={()=>updateItemQuantity(item.id, item.quantity+1)}className="btn btn-info ms-2">+</button>
    <button className='btn btn-danger'
        onClick={()=>removeItem(item.id)}
        >X</button>
</div>
)
    })
  }
  <button onClick={emptyCart}>Empty cart</button>
  </DrawerBody>
  
  </DrawerContent>

  
  
  
  </Drawer>
    </div>
  )
}

export default Cart
