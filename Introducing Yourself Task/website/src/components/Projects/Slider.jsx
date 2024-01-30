import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "https://softtechnics.vercel.app/project/img1.png",
    disc: (
      <div>
        Gym websites typically provide details about membership options, including pricing for different plans, contract terms, and any special promotions or discounts. They might also outline what is included in each membership level.
        <a href="https://coindom-gold.vercel.app/">demo</a>
      </div>
    )
  },
  {
    img: "https://softtechnics.vercel.app/project/img2.png",
    disc: (
      <div>
        Gym websites typically provide details about membership options, including pricing for different plans, contract terms, and any special promotions or discounts. They might also outline what is included in each membership level.
        <a href="https://lumapix.vercel.app/">demo</a>
      </div>
    )
  },
  {
    img: "https://softtechnics.vercel.app/project/img3.png",
    disc: (
      <div>
        Gym websites typically provide details about membership options, including pricing for different plans, contract terms, and any special promotions or discounts. They might also outline what is included in each membership level.
        <a href="https://react-ecomm-ten.vercel.app/">demo</a>
      </div>
    )
  },

  {
    img: "https://softtechnics.vercel.app/project/img4.png",
    disc: (
      <div>
        Gym websites typically provide details about membership options, including pricing for different plans, contract terms, and any special promotions or discounts. They might also outline what is included in each membership level.
        <a href="https://memory-game-5h3f1h6hv-owaisdurvesh.vercel.app/">demo</a>
      </div>
    )
  },
  {
    img: "https://softtechnics.vercel.app/project/img5.png",
    disc: (
      <div>
        Gym websites typically provide details about membership options, including pricing for different plans, contract terms, and any special promotions or discounts. They might also outline what is included in each membership level.
        <a href="https://health-hub-gym.vercel.app/">demo</a>
      </div>
    )
  },


  
  
  
  
        
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`