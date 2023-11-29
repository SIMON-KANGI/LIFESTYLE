import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Plan from './Components/Plan.jsx'
import { Suspense } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Suspense fallback={  <div id="sus-fallback">
  <h1>Loading</h1>
</div>}>
  <BrowserRouter>   
  <ChakraProvider>  
  <App />
  </ChakraProvider>

  </BrowserRouter>
  </Suspense>
  
 
  </React.StrictMode>,
)
