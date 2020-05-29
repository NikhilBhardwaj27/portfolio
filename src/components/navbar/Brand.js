import React from 'react'
import styled from "styled-components";


const Brand = () => {
  return (
    <Logo>Nikhil <span>Bhardwaj</span></Logo>
  )
}

const Logo = styled.h2`
  color:#dfe6e9;
  margin: auto 0;
  span {
    color:#fdcb6e
  }
`;

export default Brand;
