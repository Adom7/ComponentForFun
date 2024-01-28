import React, { Component } from 'react';
import './LandingSection.css'
import MoonField from '../../media/Fields/MoonField.png'

class LandingSection extends Component {
    render() {
        return (
            <div className='landing-section-master'>
                <img src={MoonField} alt="" />
            </div>
        );
    }
}

export default LandingSection;