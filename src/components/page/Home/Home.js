import React from 'react';
import { Link } from 'react-router-dom';

import BgImage from '../../../common/BackgroundImage/BgImage';
import image from '../../../assests/Homepage.png';
import image1 from '../../../assests/cabImg1.png';
import image2 from '../../../assests/cabImg2.png';
import image3 from '../../../assests/cabImg3.jpeg';
import Btn from '../../Ui/button/Btn'
import { DESCRIPTION, LABELS } from '../../../common/constant/const';

import './css/home.css';

function Home() {
  return (
    <div id='homePageContainer'>
      <BgImage className="bgImage">
        <div id='homePage'>
          <div id='textContainer'>
            <p id='header'>{LABELS.SHIELD}</p>
            <p id='paraText'>{LABELS.AFFORDABLE}</p>
            <Btn />
          </div>
          <div id='imageContainer'>
            <img id='homeImg' src={image} alt="Homepage Banner" />
          </div>
        </div>
      </BgImage>

      <h4 id='homeText'>{LABELS.CHOOSE}</h4>
      <div id='homeImageContainer'>
        <div id='homeImgWrapper'>
          <div className='homeTextImgContainer'>
            <img className='cabImage' src={image1} alt="Taxi Service 1"  />
            <div className='homersntextContainer'>
              <h3 className='homersntextHeader'>{LABELS.WIDE_COVERAGE}</h3>
              <p className='homersntextPara'>{DESCRIPTION.GEOGRAPHIC_AREA}</p>
              <div className='homeAnchor'>
                <Link to="/" className='anchorColor' >{LABELS.READ_MORE}</Link>
              </div>
            </div>
          </div>

          <div className='homeTextImgContainer'>
            <img className='cabImage' src={image2} alt="Taxi Service  2"  />
            <div className='homersntextContainer' id='color'>
              <h3 className='homersntextHeader'>{LABELS.AVAILABILITY}</h3>
              <p className='homersntextPara'>{DESCRIPTION.TRANSPORTATION}</p>
              <div className='homeAnchor'>
                <Link className='anchorColor' to="/" id='white'>{LABELS.READ_MORE}</Link>
              </div>
            </div>
          </div>

          <div className='homeTextImgContainer'>
            <img className='cabImage' src={image3} alt="Taxi Service  3"  />
            <div className='homersntextContainer'>
              <h3 className='homersntextHeader'>{LABELS.CUSTOMER_SUPPORT}</h3>
              <p className='homersntextPara'>{DESCRIPTION.EXCELLENT}</p>
              <div className='homeAnchor'>
                <Link to="/" className='anchorColor'>{LABELS.READ_MORE}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
