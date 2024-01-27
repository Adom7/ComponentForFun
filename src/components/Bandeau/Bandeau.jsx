import React, { Component } from "react";
import "./Bandeau.css";

let dup = [];
let i = 3;
const images = require.context("../../media/TechLogos", true);
const imageList = images.keys().map((image) => images(image));

for (let j = 0; j < i; j++) {
  dup = dup.concat(
    <div className="bandeau-elements">
      {imageList.map((image, index) => (
        <div className="box">
          <img key={index} src={image} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  );
}

class Bandeau extends Component {
  render() {
    return (
      <div className="bandeau-master">
       {dup}
      </div>
    );
  }
}

export default Bandeau;
