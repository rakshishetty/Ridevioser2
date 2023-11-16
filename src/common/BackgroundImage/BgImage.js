import React from 'react'

import image from '../../assests/pageBg.png'

const BgImage = ({ className, children }) => {
    const containerStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%' ,
        backgroundPosition: 'center',
        width: '100%',
      };
    
      return (
        <div className = {`${className}`} style={containerStyle}>
         {children}
        </div>
      );
}

export default BgImage