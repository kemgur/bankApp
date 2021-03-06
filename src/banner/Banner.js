import React from 'react'
import {Carousel} from "react-bootstrap"
import Banner1 from "../images/carousel/1.jpeg";
import Banner2 from "../images/carousel/2.jpeg";
import Banner3 from "../images/carousel/3.jpeg";
import "./Banner.css";

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
           {images.map((item)=>{
               const {image, btnLabel, description}=item;
             return(
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="slide"/>
                <Carousel.Caption>
                  <div>
                    <button className="btn btn-danger">{btnLabel}</button>
                  </div>
                  <p className="text-dark carousel-desc">{description}</p>
                </Carousel.Caption>
              </Carousel.Item>
               );
           })}
  
 
</Carousel>
        </div>
    )
}

export default Banner
