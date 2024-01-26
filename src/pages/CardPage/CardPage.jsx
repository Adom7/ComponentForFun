import React, { Component } from 'react';
import './CardPage.css'
import Card from '../../components/Cards/Card';

class CardPage extends Component {
    render() {
        return (
                <div className="card-group">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        );
    }
}

export default CardPage;