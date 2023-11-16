import React from 'react'

import BgImage from '../../../common/BackgroundImage/BgImage'
import { LABELS } from '../../../common/constant/const'
import { Link } from 'react-router-dom'
import image4 from '../../../assests/serviceIcon.png'
import image5 from '../../../assests/Rectangle 1.png'
import image6 from '../../../assests/car.png'

import './css/services.css'
function Services() {
    return (
        <div id='serviceMainContainer'>
            <BgImage className='bgImage'>
                <div className='anchorLinkContainer'>
                    <Link id='homeLink' to="/">{LABELS.HOME}</Link>
                    <p className='slash'>/</p>
                    <Link id='subLink' to="/services">{LABELS.SERVICES}</Link>
                </div>
                <h2 className='color'>SERVICES</h2>
            </BgImage>
            <div id='serviceContainer'>
                <p className='headerTextService headerServices'>Our Services</p>
                <h1 className='paraTextService headerServices'>What We Do</h1>
                <div className='container'>
                    <div className='colContainer'>
                        <div className='subContainer'>
                            <img id='homeImg' src={image4} alt="Homepage Banner" />
                            <div className='textContainer'>
                                <h2 className='rowHeader'>Safety Measures</h2>
                                <p className='rowpara'>Implement safety features, such as background checks for drivers, driver identification, and emergency assistance options.</p>
                            </div>
                        </div>
                        <div className='subContainer'>
                            <img id='homeImg' src={image4} alt="Homepage Banner" />
                            <div className='textContainer'>
                                <h2 className='rowHeader'>Vehicle Maintenance</h2>
                                <p className='rowpara'>Implement systems to track and ensure the maintenance of vehicles, if you are working with individual drivers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rowContainer'>
                        <img id='bgImage' src={image5} alt="bgimage" />
                        <img id='carImage' src={image6} alt="car" />
                    </div>
                    <div className='colContainer'>
                        <div className='subContainer'>
                            <img id='homeImg' src={image4} alt="Homepage Banner" />
                            <div className='textContainer'>
                                <h2 className='rowHeader'>Driver Onboarding</h2>
                                <p className='rowpara'>Streamline the driver onboarding process, which includes background checks, vehicle inspections, and verifying driver licenses.</p>
                            </div>
                        </div>
                        <div className='subContainer'>
                            <img id='homeImg' src={image4} alt="Homepage Banner" />
                            <div className='textContainer'>
                                <h2 className='rowHeader'>Driver Incentives</h2>
                                <p className='rowpara'>Offer incentives and bonuses to drivers to ensure they remain engaged and motivated to provide quality service.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services