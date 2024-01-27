import React from 'react';
import './LoadingAnimation.css'

import Logo from '../Logos/Logo.jsx'


const LoadingAnimation = ({
    logo
  }) => {
    return (
        <div className="loading-screen">
            <div className="loading-screen-background">

            </div>
            <div className="logo">
                <Logo />
            </div>
        </div>
    );
  }

export default LoadingAnimation;