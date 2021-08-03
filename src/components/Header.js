import React from 'react'
import Logo from './logo'
import {FaBars} from 'react-icons/fa'

const Header = () => {
    return (
        <div className='nav'>
            <div className='header'>
                <Logo/>
                <ul>
                    <li><a href='#'>Track</a></li>
                    <li><a href='#'>Deals</a></li>
                    <li><a href='#'>Ship</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='login d-flex align-items-center'>
                <button>Login</button>
                <p className='mx-3 p-2 fs-4 mt-3'>Sign Up</p>
                </div>
                

            </div>
        </div>
    )
}

export default Header
