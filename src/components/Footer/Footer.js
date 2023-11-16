import React from 'react'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

import { DESCRIPTION } from '../../common/constant/const';

import styles from '../Footer/css/Footer.module.css'

function Footer() {
    return (
        <React.Fragment>
            <hr />
            <div className={styles.container}>
                <div className ={styles.aboutContainer}>
                    <h3 className={styles.header}>About</h3>
                    <p className={styles.p}>{DESCRIPTION.ABOUT_US}</p>
                    <div className={styles.iconContainer}>
                        <FacebookRoundedIcon className={styles.facebook} />
                        <div className={styles.icon}>
                            <TwitterIcon className={styles.socialMedia} />
                        </div>
                        <div className={styles.icon}>
                            <GoogleIcon className={styles.socialMedia} />
                        </div>
                        <div className={styles.icon}>
                            <WhatsAppIcon className={styles.socialMedia} />
                        </div>
                        <div className={styles.icon}>
                            <InstagramIcon className={styles.socialMedia} />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={styles.header}>Our Services</h3>
                    <div className={styles.iconContainer}>
                        <StarIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Professional Drivers</li>
                    </div>
                    <div className={styles.iconContainer}>
                        <StarIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Efficient Routes</li>
                    </div><div className={styles.iconContainer}>
                        <StarIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Safety Features</li>
                    </div><div className={styles.iconContainer}>
                        <StarIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Customer Support</li>
                    </div>
                    

                </div>
                <div>
                    <h3 className={styles.header}>Info</h3>
                    <div className={styles.iconContainer}>
                        <CallIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Tel: 123425_7628_177</li>
                    </div>
                    <div className={styles.iconContainer}>
                        <EmailIcon className={styles.contactIcon} />
                        <li className={styles.footerLi}>Email: info@gmail.com</li>
                    </div>
                    <div className={styles.iconContainer}>
                        <LocationOnIcon className={styles.contactIcon} />
                        <li className={styles.footerAddress}>Address:<br /> Technomers, Manglore</li>
                    </div>
                </div>
            </div>
            <hr className={styles.horizontalLine} />
            <p className={styles.footerParagraph}>@ Copyright MacLabs 2023. All Rights reserved</p>
        </React.Fragment>
    )
}

export default Footer