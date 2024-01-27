import React from 'react';
import './LoadingAnimation.css'

import LogoLine from '../../components/Logos/LogoLine.jsx'


const LoadingAnimation = ({
    logo
  }) => {
    return (
        <div className="loading-screen">
            <div className="logo">
                <LogoLine />
            </div>
        </div>
    );
  }

export default LoadingAnimation;