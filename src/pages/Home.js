import React from 'react'
import BannerSlider from '../components/BannerSlider'
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <BannerSlider />
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




