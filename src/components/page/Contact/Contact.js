import React from 'react'
import { Link } from 'react-router-dom'
import BgImage from '../../../common/BackgroundImage/BgImage'
import { LABELS } from '../../../common/constant/const'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../Contact/css/contact.css'
import TextField from '@mui/material/TextField';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
function Contact() {
    return (
        <>
            <BgImage className='bgImage'>
                <div className='anchorLinkContainer'>
                    <Link id='homeLink' to="/">{LABELS.HOME}</Link>
                    <p className='slash'>/</p>
                    <Link id='subLink' to="/contact">{LABELS.CONTACT}</Link>
                </div>
                <h2 className='color'>CONTACT US</h2>
            </BgImage>
            <div id='contactContainer'>
                <div id='wrapperContainer'>
                    <div id='leftContainer'>
                        <div id='textContainer'>
                            <h2>Contact Info</h2>
                            <div>
                                <div className='iconTextContainer'>
                                    <CallIcon />
                                    <li >Tel: 123425_7628_177</li>
                                </div>
                                <div className='iconTextContainer'>
                                    <EmailIcon />
                                    <li >Email: info@gmail.com</li>
                                </div>
                                <div className='iconTextContainer'>
                                    <LocationOnIcon />
                                    <li>Address:<br /> Technomers, Manglore</li>
                                </div>
                            </div>
                        </div>
                        <div  className='iconContainer'>
                            <FacebookRoundedIcon />
                            <TwitterIcon />
                            <GoogleIcon />
                            <WhatsAppIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    <div id='rightContainer'>
                        <h2 id='rightHeading'>Let's Talk</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <TextField id="standard-basic" label="First Name" variant="standard" />
                            </div>
                            <div className="inputBox w50">
                                <TextField id="standard-basic" label="Last Name" variant="standard" />
                            </div>
                        </div>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <TextField id="standard-basic" label="Email Address" variant="standard" />
                            </div>
                            <div className="inputBox w50">
                                <TextField id="standard-basic" label="Mobile Number" variant="standard" />
                            </div>
                        </div>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <TextField id="standard-basic" label="Write your message here....." variant="standard" />
                            </div>
                        </div>
                        <button id='submitButton'>SEND</button>
                        <div >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact


