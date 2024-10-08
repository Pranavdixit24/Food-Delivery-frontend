import React, { useContext } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home")
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" /></Link>
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>{setMenu("Mobile")}} className={menu==="Mobile"?"active":""}>Mobile-app</li>
        <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
