import React, { useState } from 'react'
import { FiSearch , FiHeart,FiShoppingCart} from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import "./Navbar.scss"

import { useSelector } from "react-redux";
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const products = useSelector((state) => state.CartReducer.products);
    const navigate=useNavigate()
    const [open,setOpen] = useState(false)
    const data= [
        {
        id:1,
        placeholder: "Select location",
        icon: <IoLocationOutline />
    },
        {
        id:2,
        placeholder: "Store & Preschools",

    },
        {
        id:3,
        placeholder: "Support",
    },
        {
        id:4,
        placeholder: "Track Order",
    },
        {
        id:5,
        placeholder: "FirstCry Parenting",
    },
        {
        id:6,
        placeholder: "Login / Register",
        navigateto:"/"
    },
        {
        id:7,
        placeholder: "Shortlist",
        icon:<FiHeart/>
    }
]
  return (
    <nav className='navbar'>
        <div className="navbar__container">
            <div className="navbar__container__left">
                <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo"  onClick={()=>navigate("/home")}/>
                <div>
                    <input type="text" placeholder='Search for a Catergory,Brand or Product'/>
                    <span><FiSearch/></span>
                </div>
            </div>
            <div className="navbar__container__right">
                <ul >
                    {data.map((subitem)=>(
                        <li key={subitem.id} onClick={()=>navigate(subitem?.navigateto)}>
                            <span>{subitem?.icon}</span>
                            <span>{subitem.placeholder}</span>
                        </li>
                    ))}
                </ul>
                <button className='navbar__cart__button' onClick={()=>setOpen(!open)}>
                    <span>
                        <FiShoppingCart size={30}/>
                        <span className='navbar__cart__button__items'>{products?products.length:0}</span>
                        </span>
                    <span>Cart</span>
                </button>
            </div>
        </div>
        {open && <Cart/>}
    </nav>
  )
}

export default Navbar