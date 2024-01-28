import React, { Component } from "react";
import "./TextAnimation.css";

export default class TextAnimation extends Component {
  
    componentDidMount() {
        const elements = document.querySelectorAll('.slide-up-div h1');
        let currentIndex = 1;
        const totalTime = elements.length * 1000;
        document.documentElement.style.setProperty('--text-caroussel', `${totalTime}ms`);

        this.interval = setInterval(() => {
            elements[currentIndex].scrollIntoView({ behavior: 'smooth' });

            if (currentIndex === elements.length - 1) {
                clearInterval(this.interval);
            } else {
                currentIndex++;
            }
        }, 1000);
    }

  render() {
    return (
      <div className="text-anim-master">
        <div className="text-anim-background" />
        <div className="text-anim-content">
          <h1 style={{ margin: "0" }}> I A.M </h1>
          <div className="text-viewBox">
            <div className="text-to-show">
              <div className="slide-up-div">
                <h1>Creative</h1>
                <h1>Developer</h1>
                <h1>Human (I Swear 🤖)</h1>
                <h1>Adlane OULD MOHAND</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
