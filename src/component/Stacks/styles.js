import styled from "styled-components";

export const StacksStyle = styled.div`
  /* background: #515c5a; */

  background: #161616;
  padding: 0% 0% 0%;
  & > h1 {
    padding: 0 10% 50px;
    color: white;
    @media (max-width: 800px) {
      padding: 0% 5% 50px;
    }
  }
  .container {
    margin: auto;
    width: 100%;
    @media (max-width: 1200px) {
      display: flex;
      flex-wrap: wrap;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
  .stack {
    &:nth-child(1) {
      grid-area: 1 / 1/ 1 /3;
    }
    &:nth-child(2) {
      grid-area: 1 / 2/ 1 /4;
    }
    &:nth-child(3) {
      grid-area: 1 /4 / 1 /6;
    }
    &:nth-child(4) {
      grid-area: 1 /5 / 1 /7;
    }
    &:nth-child(5) {
      grid-area: 1 /7 / 1 /9;
    }
    &:nth-child(6) {
      grid-area: 1 / 8/ 1 /10;
    }
    &:nth-child(7) {
      grid-area: 1 /10/ 1 /12;
    }
    &:nth-child(8) {
      grid-area: 1 /11/ 1 /13;
    }
    @media (max-width: 1200px) {
      margin-top: 30px;
    }
  }
  .line-scale-container {
    margin: 0 auto;
    padding: 0 0 6%;
    @media (min-width: 800px) {
      display: none;
    }
  }
`;

export const LineScaleStyles = styled.div`
  background: #0d0d0d;
  height: 5px;
  padding: 1px;
  position: relative;
  border-radius: 5px;
  .line-scale-name {
    position: absolute;
    top: -20px;
    span {
      color: white;
      font-size: 12px;
    }
  }
  .line-scale-range {
    border-radius: 5px;
    height: 100%;
    background: ${({
      lightBgColor = "white",
      darkBgColor = "red",
      rangeBgColor = "blue",
    }) =>
      `linear-gradient(to left, ${lightBgColor} 29%, ${rangeBgColor},${darkBgColor} 89%)`};
    width: ${({ range }) => range + "%"};
  }
`;

export const ScaleStyles = styled.div`
  height: ${({ height = 300 }) => height + "px"};
  width: ${({ width = 300 }) => width + "px"};
  display: flex;
  align-items: flex-end;
  position: relative;
  & > .name {
    position: absolute;
    top: -12px;
    color: white;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    font-size: 12px;
  }
  & > .scale-range {
    min-width: 100%;
    height: ${({ range }) => range + "%"};
    position: relative;
    clip-path: ${({ range, width, height }) =>
      `path("
    M${width / 2},0  
    Q${width / 2},${(range / 100) * height}   0,${(range / 100) * height}  
    H ${(range / 100) * height} ,${width}   
    Q${width / 2},${(range / 100) * height}  ${width / 2} 0  Z 
      ")`};
    background: ${({
      lightBgColor = "white",
      darkBgColor = "red",
      rangeBgColor = "blue",
    }) =>
      `linear-gradient(to bottom, ${lightBgColor} 29%, ${rangeBgColor},${darkBgColor} 89%)`};

    &:after {
      content: '${({ range }) => `${range}% `}';
      height: 20px;
      text-align: center;
     color: black;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 20px;
      margin: auto;
    }
  }
`;
