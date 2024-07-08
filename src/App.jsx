import React, { useState } from 'react'
import Navbar from './components/navbar'
import Header from './components/Header'
import Home from './Home/Home'
import Footer from "./components/footer/footer"
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
// import {brows}

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  // console.log(showLogin);

  return (
   <>
    {showLogin? <LoginPopUp setShowLogin={setShowLogin}/> :<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Home/>
      </div>
      <Footer/>
   </>
  )
}

    

// cartContext left to log dishes on console
export default App
