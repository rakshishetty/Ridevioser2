import React from 'react'
import { Link } from 'react-router-dom';

import { LABELS } from '../../../common/constant/const';
import BgImage from '../../../common/BackgroundImage/BgImage'
import Btn from '../../Ui/button/Btn'
import car from '../../../assests/car.png'

import './css/about.css'

function About() {
  return (
    <div id="aboutContainer">
      <BgImage className='bgImage'>
        <div className='anchorLinkContainer'>
        <Link id='homeLink' to="/">{LABELS.HOME}</Link>
        <p className='slash'>/</p>
        <Link id='subLink' to="/about">{LABELS.ABOUT}</Link>
        </div>
        <h2 className='color'>ABOUT US</h2>
      </BgImage>
      <div id='btnimgContainer'>
        <div id='container'>
          <h1 className='color'>About Us</h1>
          <p id='aboutParaContainer'>We're dedicated to redefining your transportation experience. Our mission is simple: to provide a reliable, safe, and convenient ride whenever and wherever you need it. We take pride in our professional drivers, user-friendly app, and 24/7 service. With transparent pricing, clean vehicles, and a commitment to your safety, we aim to make your journey comfortable and stress-free. Join the our community today, and let us be your trusted transportation partner on your next adventure. Our passion for innovation and customer satisfaction drives us to continually improve and enhance your travel experience.</p>
          <Btn />
        </div>
        <img className="img" src={car} alt="car" />
      </div>
    </div>
  )
}

export default About