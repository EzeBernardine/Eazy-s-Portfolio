import styled from "styled-components";

export const ServicesStyle = styled.div`
  background: #2d2f2f;
  padding: 6% 10%;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    padding: 6% 5% 6%;
  }
  .container {
    & > * {
      text-align: start;
    }
    h1 {
      color: #515c5a;
      font-size: 4rem;
      font-family: "Ultra", serif;
    }
    h2 {
      margin: 30px 0;
      font-weight: bolder;
      color: #fff;
    }
    p {
      color: #fff;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      & > div {
        padding: 20px 0;
        border-bottom: 1px solid #515c5a;
        @media (max-width: 400px) {
          align-items: center;
          text-align: center
        }
      }
    }
  }
`;
