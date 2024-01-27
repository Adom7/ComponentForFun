import React, { Component } from 'react';
import './TechCard.css'

class TechCard extends Component {
    image
    text
    render() {
        return (
            <div className='tech-card-master' >
                <div className="tech-card-content">
                    <img src={this.image} alt="" />
                    <label htmlFor={this.text}> {this.text} </label>
                </div>
            </div>
        );
    }
}

export default TechCard;