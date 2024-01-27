import React, { Component } from "react";
import "./Bandeau.css";

let i = 3;
const images = require.context("../../media/TechLogos", true);
const imageList = images.keys().map((image) => images(image));


const Bandeau = ({
    reversed
  }) => {
    function buildBandeau() {
        let elements = [];
        let bandeauClassName = "bandeau-elements";
        if (reversed) {
          bandeauClassName += "-reversed";
        }
      
        for (let j = 0; j < i; j++) {
          elements = elements.concat(
            <div className={bandeauClassName}>
              {imageList.map((image, index) => (
                <div className="box">
                  <img key={index} src={image} alt={`image-${index}`} />
                </div>
              ))}
            </div>
          );
        }
      
        return elements;
      }

    return (
      <>
        <div className="bandeau-master">{buildBandeau()}</div>
      </>
    );
  }


export default Bandeau;
