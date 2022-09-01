import React from 'react'
import BannerSlider from '../components/BannerSlider'
import styled from 'styled-components';
import ShopItems from '../components/ShopItems';
import CompusItems from '../components/CompusItems';
import BlogItems from '../components/BlogItems';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <Container>
      <BannerSlider />
      <ShopItems />
      <CompusItems />
      <Banner />
      <BlogItems />
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`




