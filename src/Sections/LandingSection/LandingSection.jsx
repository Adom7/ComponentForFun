import React, { Component } from 'react';
import './LandingSection.css'
import MoonField from '../../media/Fields/MoonField.png'
import ManKneesFlag from '../../media/Moon/Man/man-knees-flag.png'
import Rocket from '../../media/Moon/Rocket/rocket.png'
// NOTE - May not be the best Idea
class LandingSection extends Component {
    render() {
        return (
            <div className='landing-section-master'>
                <img src={MoonField} alt="" />
                <img src={ManKneesFlag} alt=""  className='man-flag'/>
                <img src={Rocket} alt="" className='rocket'/>
            </div>
        );
    }
}

export default LandingSection;