import React from "react";
import "../styles/ImageDisplay.css";

function ImageDisplay({ img }) {
  return <img className="up-image" src={img} alt="uploaded image" />;
}

export default ImageDisplay;
