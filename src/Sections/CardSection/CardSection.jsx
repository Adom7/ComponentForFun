import React, { Component } from 'react';
import './CardSection.css'
import Card from '../../components/Cards/Card';


class CardSection extends Component {
    render() {
        return (
            <div className="card-group">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default CardSection;