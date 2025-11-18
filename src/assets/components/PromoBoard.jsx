import "./HomeComponents.css";
import React, { useState, useEffect } from "react";

function PromoBoard() {
  const images = [
    "/promoBoard.webp",
    "/adbanner05.webp",
    "/adbanner06.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="PromoBoard">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Advertisement ${index + 1}`}
            className={`slideshow-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="slideshow-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromoBoard;
