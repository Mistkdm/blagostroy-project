import "./style.css";

import React, { useState } from "react";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <div className="row">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
      <div className="row justify-content-center d-flex">
        <button onClick={handlePrevious} className="col-6 col-sm-6">
          &lt;
        </button>
        <button onClick={handleNext} className="col-6 col-sm-6">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
