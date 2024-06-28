import React from 'react'
import Navbar from './components/navbar'
import Header from './components/Header'
import Home from './Home/Home'
import Footer from "./components/footer/footer"
// import {brows}

const App = () => {
  return (
   <>
    <div className='app'>
      <Navbar></Navbar>
      <Home/>

  

    </div>
    <Footer/>
   </>
  )
}
// cartContext left to log dishes on console
export default App
