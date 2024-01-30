import React, { Component } from 'react';
import './HomePage.css'
import BandeauSection from '../../sections/Bandeau/BandeauSection';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import TextAnimation from '../../components/TextAnimation/TextAnimation';
import HomeSection from '../../sections/HomeSection/HomeSection';

class HomePage extends Component {
    render() {
        return (
            <div className='home-master noise-arc'>
                <LoadingAnimation />
                <TextAnimation />
                    <div className="appear-after-loading">
                    <HomeSection />
                    <BandeauSection />  
                    </div>
            </div>
        );
    }
}

export default HomePage;