import styled from "styled-components";

export const WorksStyle = styled.div`
  background: #161616;
  /* background: #2d2f2f; */

  padding: 6% 10% 6%;
  @media (max-width: 800px) {
    padding: 6% 5% 6%;
  }
  .container {
    h2 {
      color: white;
    }
    .works {
      margin: 9% 0 5%;
      & > div {
        overflow: hidden;
        background: linear-gradient(to right, #0d0d0d 29%, #242323 89%);
        border-radius: 20px;
        box-shadow: rgba(65, 69, 72, 0.2) 0px 0px 15px;
        padding: 30px;
        position: relative;
        transition: .9ms linear;
        cursor: pointer;
        header {
          color: white;
          position: relative;
          padding: 0 0 10px;
          sub {
            font-size: 10px;
            font-weight: 400;
            padding-left: 5px;
          }
          &:after {
            content: "";
            position: absolute;
            width: 40px;
            left: 0;
            bottom: 0;
            background: #00ffcc;
            height: 2px;
          }
        }
        ul {
          margin: 30px 0 0;
          position: relative;
          z-index: 2;
          li {
            color: #c3cac9;
            font-size: 14px;
            margin: 7px 0 0;
            span {
              position: relative;
              padding-left: 15px;
              &:after {
                position: absolute;
                content: "✔️";
                left: 0;
                color: #00ffcc;
              }
            }
            .imgFrame {
              height: 30px;
              width: 30px;
              overflow: hidden;
              margin-left: 10px;
              img {
                height: 100%;
                width: 100%;
                object-fit: contain;
              }
            }
          }
        }
        .clipped {
          position: absolute;
          width: 50%;
          height: 100%;
          right: 0;
          top: 0;
          bottom: 0;
          background: #0d0d0d;
          clip-path: polygon(0% 100%, 100% 100%, 100% 50%);
        }
        &:hover {
          box-shadow: rgba(80, 81, 83, 0.2) 0px 0px 18px 9px;
          transform: scaleY(1.1);
        }
      }
      @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
