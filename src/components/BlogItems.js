import React from 'react'
import styled from 'styled-components'

const BlogItems = () => {
  return (
    <Container>
      <BlogTitle>
        <h3>BLOG</h3>
        <span>News</span>
        <span>Fashion</span>
      </BlogTitle>
    </Container>
  )
}

export default BlogItems

const Container = styled.div`
  margin-top: 50px;
`
const BlogTitle = styled.div`
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












