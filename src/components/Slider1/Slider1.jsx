import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider1.css"; // Custom styles for the slider

const ManualSlider = () => {
  // Define user manual slides (for demonstration, we have more than 3 slides)
  const slides = [
    { title: "Introduction", image:"" },
    { title: "Getting Started", content: "This is the getting started section." },
    { title: "Features", content: "This is the features section." },
    { title: "FAQs", content: "This is the FAQ section." },
    { title: "Support", content: "This is the support section." },
    { title: "More Info", content: "This is the more info section." }
  ];

  // Slick slider settings with 3 dots
  const settings = {
    dots: true, // Enable dots
    infinite: true, // Disable infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 2 slides at a time to ensure only 3 dots
    slidesToScroll: 2, // Scroll 2 slides at a time (for correct dots behavior)
    customPaging: (i) => <button>{i + 1}</button>, // Custom dot numbering (optional)
    appendDots: (dots) => (
      <div>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
    arrows: true ,// Show prev/next arrows
     centerMode: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className='Carousel'>
              <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ManualSlider;
