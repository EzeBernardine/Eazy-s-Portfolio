import styled from "styled-components";

export const CirclesStyle = styled.div`
  position: absolute;
  height: ${({ highest }) => highest + "px"};
  width: ${({ highest }) => highest + "px"};
  border: none;
  & > div {
    border: ${({ color }) => `1px solid ${color}`};
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    @media (max-width: 760px) {
      border: 1px solid #00ffcc21;
    }
  }
`;
