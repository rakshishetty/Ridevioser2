import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assests/logo.png'
import { LABELS } from '../../common/constant/const';
import Person2Icon from '@mui/icons-material/Person2';

import './css/NavBar.css'

function NavBar() {
    return (
        <div id='navBar'> 
            <div id='navBarContainer'>
                    <img className="img" src={Logo} alt="Logo" />
                <div id='linkContainer'>
                    <Link className='link' to="/">{LABELS.HOME}</Link>
                    <Link className='link' to="/about">{LABELS.ABOUT}</Link>
                    <Link className='link' to="/services">{LABELS.SERVICES}</Link>
                    <Link className='link' to="/booking">{LABELS.BOOKING}</Link>
                    <Link className='link' to="/contact">{LABELS.CONTACT}</Link>
                    <Person2Icon/>
                </div>
            </div>
        </div>
    )
}
export default NavBar