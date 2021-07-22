import React from 'react'
import {Carousel} from "react-bootstrap"
import Banner1 from "../images/carousel/1.jpeg";
import Banner2 from "../images/carousel/2.jpeg";
import Banner3 from "../images/carousel/3.jpeg";

const images = [
    {
      image: Banner1,
      btnLabel: "Find out more",
      description: "Internet banking for banking transactions wherever you are",
      interval: 10000,
    },
    {
      image: Banner2,
      btnLabel: "Find out more",
      description: "To Add value for your money",
      interval: 5000,
    },
    {
      image: Banner3,
      btnLabel: "Find out more",
      description: "Summer is here vacation loan to see new places",
      interval: 15000,
    },
  ];
  
const Banner=()=> {
    return (
        <div>
           <Carousel nextLaber="" prevLaber="">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Banner
