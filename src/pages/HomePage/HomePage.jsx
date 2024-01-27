import React, { Component } from 'react';
import './HomePage.css'
import BandeauSection from '../../sections/Bandeau/BandeauSection';
import LoadingAnimation from '../../sections/LoadingAnimation/LoadingAnimation';

class HomePage extends Component {
    render() {
        return (
            <div className='home-master'>
                <LoadingAnimation />
                <BandeauSection />
            </div>
        );
    }
}

export default HomePage;