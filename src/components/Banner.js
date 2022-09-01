import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Image>
        <img src='https://locatheart.com/wp-content/uploads/2021/08/Fashion-content-marketing-Loc-At-Heart-Translation-Agency.png' alt='banner' />
    </Image>
  )
}

export default Banner

const Image = styled.div`
    margin-top: 50px;

    img {
        width: 100%;
    }
`





















