import React, { Component } from 'react';
import './BandeauSection.css'
import Bandeau from '../../components/Bandeau/Bandeau';

class BandeauSection extends Component {
    render() {
        return (
            <div className='bandeau-section-master' >
                <Bandeau {...{reversed : true}} />
                <Bandeau  />
                <Bandeau {...{reversed : true}} />
            </div>
        );
    }
}

export default BandeauSection;