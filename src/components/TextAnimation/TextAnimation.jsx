import React, { Component } from "react";
import "./TextAnimation.css";

const adjectives = [
  "Créatif",
  "Developer",
  "Humain (Promis🤖)",
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
  "Adlane OULD MOHAND"
];

export default class TextAnimation extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll(".slide-up-div h1");
    let currentIndex = 0;
    let delay = 1000;
    const retrait = 1.2

    const totalAnimationTime = () => {
      let totalTime = 0;
      let fakeDelay = delay;

      adjectives.forEach((element, index) => {
        if (fakeDelay <= 0) {
          return totalTime;
        }
        totalTime += fakeDelay;
        fakeDelay /= retrait;
      });

      return totalTime;
    };

    const scrollAndDecreaseDelay = () => {
      elements[currentIndex].scrollIntoView({ behavior: "smooth" });
      currentIndex++;

      if (currentIndex < elements.length) {
        delay /= retrait;
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
                {adjectives.map((adjective, index) => (
                  <h1 key={index}>{adjective}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
