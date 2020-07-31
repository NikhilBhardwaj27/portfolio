import React from "react";
import styled from "styled-components";

const Brand = () => {
  return (
    <Logo>
      Nikhil <span>Bhardwaj</span>
    </Logo>
  );
};

const Logo = styled.h2`
  color: #777;
  margin: auto 0;
  span {
    color: #0080ff;
  }
`;

export default Brand;
