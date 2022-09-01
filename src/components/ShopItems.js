import React from 'react'
import styled from 'styled-components'
import { AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ShopItems = () => {
  return (
  <ShopContainer>
    <SectionTitle>
      <h3>SHOP</h3>
      <span>New</span>
      <span>Casual</span>
    </SectionTitle>
    <ShopCardBlock>
      <ShopCard>
        <Link to='/shop'><img src='/images/product-1.jpg' alt='product-1'/></Link>
        <p>Adidas Originals Men's NMD_r1 Sneaker</p>
        <Star>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Star>
        <button className='add-to__cart'>Add To Cart</button>
        <button className='buy-now'>Buy Now</button>
      </ShopCard>
      <ShopCard>
        <Link to='/shop'><img src='/images/product-8.jpg' alt='product-2'/></Link>
        <p>Adidas Originals Trefoil 2.0. Backpack, One Size</p>
        <Star>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Star>
        <button className='add-to__cart'>Add To Cart</button>
        <button className='buy-now'>Buy Now</button>
      </ShopCard>
      <ShopCard>
        <Link to='/shop'><img src='/images/product-10.jpg' alt='product-3'/></Link>
        <p>Jo Malone English Pear Freesia Cologne Spray for Women</p>
        <Star>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Star>
        <button className='add-to__cart'>Add To Cart</button>
        <button className='buy-now'>Buy Now</button>
      </ShopCard>
      <ShopCard>
        <Link to='/shop'><img src='/images/product-4.jpg' alt='product-4'/></Link>
        <p>Legendary Whitetails Men's Journeyman Shirt Jacket</p>
        <Star>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Star>
        <button className='add-to__cart'>Add To Cart</button>
        <button className='buy-now'>Buy Now</button>
      </ShopCard>
      <ShopCard>
        <Link to='/shop'><img src='/images/product-5.jpg' alt='product-5'/></Link>
        <p> Crew Undershirt Multiple Packs and Colors Fruit</p>
        <Star>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Star>
        <button className='add-to__cart'>Add To Cart</button>
        <button className='buy-now'>Buy Now</button>
      </ShopCard>
    </ShopCardBlock>
  </ShopContainer>
  )
}

export default ShopItems

const ShopContainer = styled.div`
  margin-top: 50px;
`
const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ff9900;
  border-top: none;
  border-left: none;
  border-right: none;
  
  h3 {
    flex: 1;
  }
  span {
    display: flex;
    padding: 5px;
    cursor: pointer;

      &:hover {
        color: #ff9900;
      }
  }
`
const ShopCardBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

`
const ShopCard = styled.div`
  padding: 5px;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 60%;
    border-radius: 5px;

  }

  button {
    color: black;
    cursor: pointer;
    border: none;
    margin-top: 10px;
  }

  .add-to__cart {
    background-color: #ff9900;
    margin-right: 15px;
  }

`
const Star = styled.div`
  color: #ff9900;
`
