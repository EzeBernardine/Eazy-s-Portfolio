import styled from "styled-components";

export const LandingStyle = styled.div`
  margin-top: 60px;
  .main_container {
    min-height: calc(100vh - 60px);
    background: #161616;
    width: 100%;
    overflow: hidden;
    .sub-main {
      padding: 6% 10% 9%;
      @media (max-width: 800px) {
        padding: 6% 5% 9%;
      }
      .profile {
        @media (max-width: 1000px) {
          flex-direction: column;
        }
      }
      .caption-container {
        text-align: start;
        align-self: flex-start;
        margin-top: 100px;
        .caption * {
          color: white;
          white-space: nowrap;
        }
        .more-detail p {
          color: #ecf8ff;
        }
        .chart {
          margin: 10px 0;
          position: relative;
          svg {
            stroke-width: 1px;
          }
          .direct {
            background: #00ffcc82;
            height: 25px;
            width: 25px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            position: absolute;
            top: 100%;
            left: 100px;
            svg {
              fill: white;
              transform: rotate(-45deg);
            }
            @media (max-width: 400px) {
              left: 100%;
            }
          }
        }
        @media (max-width: 1000px) {
          align-self: flex-end;
          margin-top: 20px;
        }
        @media (max-width: 760px) {
          align-self: center;
          width: 100%;
        }
        @media (max-width: 400px) {
          text-align: center;
          .caption h1 {
            font-size: 1.8rem;
          }
        }
      }
      .image-container {
        position: relative;

        margin-top: 20px;
        .image-sub {
          position: relative;
          z-index: 3;
          width: 400px;
          height: 400px;
          min-width: 400px;
          overflow: hidden;
          border-radius: 50%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .circles {
          z-index: 2;
          top: 50%;
        }
        .grey-circles {
          z-index: 2;
          left: 70%;
          top: 0%;
        }
        @media (max-width: 1000px) {
          order: -1;
          align-self: flex-start;
          .image-sub {
            width: 100%;
            height: 100%;
            min-width: 100%;
          }
        }
        @media (max-width: 760px) {
          align-self: center;
          width: 100%;
          .image-sub {
            width: 70%;
            height: 70%;
            min-width: 70%;
          }
        }
      }
    }
  }
`;
