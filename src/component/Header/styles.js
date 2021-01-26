import styled from "styled-components";

export const LandingStyle = styled.div`
  margin-top: 60px;
  .main_container {
    padding: 0 10%;
    height: calc(100vh - 60px);
    background: #161616;
    width: 100%;
    overflow: hidden;
    .sub-main {
      .caption-container {
        text-align: start;
        align-self: flex-start;
        margin-top: 100px;
        .caption * {
          color: white;
        }
        .more-detail p {
          color: #ecf8ff;
        }
        .chart {
          margin-top: 10px;
          position: relative;
          svg {
            stroke-width: 1px;
          }
          .direct {
            background: #48484878;
            height: 25px;
            width: 25px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            /* cursor: pointer; */
            border-radius: 50%;
            position: absolute;
            top: 100%;
            left: 100px;
            svg {
              fill: white;
              transform: rotate(-45deg);
            }
          }
        }
      }
      .image-container {
        position: relative;
        .image-sub {
          width: 400px;
          height: 400px;
          overflow: hidden;
          border-radius: 50%;
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
        .circles {
          border: 1px solid #161616;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0px 0px 0 10px #161616, 0px 0px 0 11px #484848,
            0px 0px 0 21px #161616, 0px 0px 0 22px #484848,
            0px 0px 0 32px #161616, 0px 0px 0 33px #484848,
            0px 0px 0 43px #161616, 0px 0px 0 44px #484848,
            0px 0px 0 54px #161616, 0px 0px 0 55px #484848,
            0px 0px 0 65px #161616, 0px 0px 0 66px #484848,
            0px 0px 0 76px #161616, 0px 0px 0 77px #484848,
            0px 0px 0 87px #161616, 0px 0px 0 88px #484848,
            0px 0px 0 98px #161616, 0px 0px 0 99px #484848,
            0px 0px 0 109px #161616, 0px 0px 0 110px #484848,
            0px 0px 0 120px #161616, 0px 0px 0 121px #484848;
        }
      }
    }
  }
`;
