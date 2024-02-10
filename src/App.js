

import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";

// Importing react-slick and its styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  // Sample images and URLs for the carousel
  const slides = [
    { img: '/path/to/your/image1.jpg', url: 'http://example.com/page1' },
    { img: '/path/to/your/image2.jpg', url: 'http://example.com/page2' },
    { img: '/path/to/your/image3.jpg', url: 'http://example.com/page3' },
    // Add more images and URLs as needed
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        {/* Updated Carousel Component with clickable images */}
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <a href={slide.url} target="_blank" rel="noopener noreferrer">
                <img src={slide.img} alt={`Carousel ${index}`} />
              </a>
            </div>
          ))}
        </Slider>
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default App;

