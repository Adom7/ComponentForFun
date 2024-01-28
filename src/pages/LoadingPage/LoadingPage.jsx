import React, { Component } from 'react';

import './LoadingPage.css'

import TextAnimation from '../../components/TextAnimation/TextAnimation';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

class LoadingPage extends Component {
    render() {
        return (
            <div>
                <div className="loadingBackground">

                </div>
                <div className="animationElements">
                    <TextAnimation/>
                    <LoadingAnimation/>
                </div>
            </div>
        );
    }
}

export default LoadingPage;