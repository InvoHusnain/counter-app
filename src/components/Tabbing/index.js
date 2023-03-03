import React, { useState } from "react";
import "../../App.scss";

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-carousel">
      <div className="image-carousel__tabs">
        {images.map((image, index) => (
          <button
            key={index}
            className={`image-carousel__tab ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {/* <img src={image} alt={`hello ${index + 1}`} /> */}
            <p>{image.title}</p>
          </button>
        ))}
      </div>
      <div className="image-carousel__image-container">
        <img src={images[activeIndex].image} alt={`hello ${activeIndex + 1}`} />
      </div>
    </div>
  );
};

export default ImageCarousel;
