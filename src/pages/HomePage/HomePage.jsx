import React, { Component } from 'react';
import './HomePage.css'
import BandeauSection from '../../sections/Bandeau/BandeauSection';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import TextAnimation from '../../components/TextAnimation/TextAnimation';

class HomePage extends Component {
    render() {
        return (
            <div className='home-master'>
                <LoadingAnimation />
                <TextAnimation />
                <BandeauSection />
            </div>
        );
    }
}

export default HomePage;