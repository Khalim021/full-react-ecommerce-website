import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerSlider = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };


  return (
    <Carousel {...settings}>
      <Wrap>
        <img className='slider__img' src='https://3dlook.me/wp-content/uploads/2022/02/2265h921-1-min.jpg' alt='slider1'/>
      </Wrap>
      <Wrap>
        <img className='slider__img' src='https://nypost.com/wp-content/uploads/sites/2/2022/08/gucci-resale-27.jpg' alt='slider2'/>
      </Wrap>
      <Wrap>
        <img className='slider__img' src='https://www.mdtechmart.co.zw/wp-content/uploads/2021/05/onlineshop-mdtechmart.jpg' alt='slider3'/>
      </Wrap>
      <Wrap>
        <img className='slider__img' src='https://i2.wp.com/cloverdoe.fr/wp-content/uploads/2019/07/shop_online2.jpg?resize=1024%2C585' alt='slider4'/>
      </Wrap>
    </Carousel>
  )
}

export default BannerSlider

const Carousel = styled(Slider) `
  
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171)
    }
  }
  li.slick-active button::before {
    color: black;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  height: 500px;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    cursor: pointer;
    transition-duration: 400ms;

    &:hover {
      border: 4px solid #fff;
    }
  }



`














