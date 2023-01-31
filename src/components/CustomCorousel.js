import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import corouselImg1 from '../assets/images/home/slider_1.jpg';
import corouselImg2 from '../assets/images/home/slider_2.jpg';
import corouselImg3 from '../assets/images/home/slider_3.jpg';
import corouselImg4 from '../assets/images/home/slider_4.jpg';
import corouselImg5 from '../assets/images/home/slider_5.jpg';
import corouselImg6 from '../assets/images/home/slider_6.jpg';
import corouselImg7 from '../assets/images/home/corousel_img3.jpg';


const CustomCorousel = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src={corouselImg1} />
        <p className="legend"><h1>Education is Life</h1></p>
      </div>
      <div>
        <img src={corouselImg2} />
        <p className="legend"><h1>Your Bright Future is Our Mission</h1></p>
      </div>
      <div>
        <img src={corouselImg3} />
        <p className="legend"><h1>Helping Each of Our Students Fulfill the Potential</h1></p>
      </div>
      <div>
        <img src={corouselImg4} />
        <p className="legend"><h1>We Treat our Student as our Children</h1></p>
      </div>
      <div>
        <img src={corouselImg5} />
        <p className="legend"><h1>We Treat our Student as our Children</h1></p>
      </div>
      <div>
        <img src={corouselImg6} />
        <p className="legend"><h1>We Treat our Student as our Children</h1></p>
      </div>
      <div>
        <img src={corouselImg7} />
        <p className="legend"><h1>We Treat our Student as our Children</h1></p>
      </div>
    </Carousel>
  );
}

export default CustomCorousel;
// https://www.npmjs.com/package/react-responsive-carousel
