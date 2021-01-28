import styled from "styled-components";

export const AboutStyle = styled.div`
  background: #161616;

  .container {
    position: relative;
    z-index: 10;
    & > h1 {
      text-align: center;
      color: #161616;
      font-size: 9rem;
      word-spacing: 3rem;
      letter-spacing: 3rem;
      text-shadow: 0px 0px 1px #fbfbfb;
      /* text-shadow: 0px 0px 1px #515c5a; */
      line-height: 7rem;
    }
    .about-me {
      margin: 6% 10% 0;
      border: 1px solid #fff;
      border-bottom: none;
      border-radius: 30px 30px 0 0;
      padding: 30px 30px 0;
      @media (max-width: 800px) {
        padding: 15px 15px 0;
        margin: 6% 5% 0;
      }
      & > div {
        border: 1px solid #fff;
        border-bottom: none;
        background: #2d2f2f;
        padding: 30px;
        @media (max-width: 800px) {
          padding: 15px;
        }
        p {
          color: white;
        }
      }
    }
  }
`;
