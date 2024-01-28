import React, { Component } from "react";
import "./TextAnimation.css";

const adjectives = [
  "Créatif",
  "Innovant",
  "Logique",
  "Méticuleux",
  "Analytique",
  "Adaptable",
  "Curieux",
  "Organisé",
  "Persévérant",
  "Rigoureux",
  "Collaboratif",
  "Autodidacte",
  "Débrouillard",
  "Passionné",
  "Patient",
  "Pragmatique",
  "Astucieux",
  "Visionnaire",
  "Flexible",
  "Polyvalent",
];

export default class TextAnimation extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll(".slide-up-div h1");
    let currentIndex = 1;
    let delay = 500;

    const totalAnimationTime = () => {
      let totalTime = 0;
      let fakeDelay = 500;

      adjectives.forEach((element, index) => {
        if (fakeDelay <= 0) {
          return totalTime;
        }
        totalTime += fakeDelay;
        fakeDelay -= 50;
      });

      return totalTime;
    };

    const scrollAndDecreaseDelay = () => {
      elements[currentIndex].scrollIntoView({ behavior: "smooth" });
      currentIndex++;

      if (currentIndex < elements.length) {
        delay -= 50;
        setTimeout(scrollAndDecreaseDelay, delay);
      }
    };

    document.documentElement.style.setProperty(
      "--text-caroussel",
      `${totalAnimationTime()}ms`
    );
    scrollAndDecreaseDelay(); // Appel initial
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
                {adjectives.map((adjective, index) => (
                  <h1 key={index}>{adjective}</h1>
                ))}
                <h1>Adlane OULD MOHAND</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
