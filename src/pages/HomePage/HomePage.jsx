import React, { Component } from 'react';
import './HomePage.css'
import CardSection from '../../Sections/CardSection/CardSection';
import BandeauSection from '../../Sections/Bandeau/BandeauSection';

class HomePage extends Component {
    render() {
        return (
            <div>
                <CardSection/>
                <BandeauSection />
            </div>
        );
    }
}

export default HomePage;