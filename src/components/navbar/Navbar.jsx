import React, { useState } from 'react'
import { } from 'react'
import { NavLink } from 'react-router-dom'
import "../navbar/navbar.css"

const Navbar = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    return (
        <>
            <section className='header'>
            <div className='navbar'>
                <div><h3 className='logo'>logo</h3></div>
                <div className='navlinks'>
                    <ul>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/offer'}>Offer</NavLink>
                        <NavLink to={'/help'}>Help</NavLink>
                        <NavLink to={'/cart'}>Cart</NavLink>
                        <NavLink to={'/signin'}>Sign in</NavLink>
                        <button onClick={()=> { loginBtn === "Login" ? setLoginBtn('Logout') : setLoginBtn('Login')}}>{loginBtn}</button>
                    </ul>
                </div>
            </div>
            </section>
        </>
    )
}

export default Navbar