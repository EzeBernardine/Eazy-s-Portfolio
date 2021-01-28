import styled from "styled-components";

export const MenuStyle = styled.div`
  div {
    border: 0;
    padding: 0;
    margin: 0;
  }
  header {
    background: #161616;
    transition: background-color 250ms linear;
    margin: 0;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    display: flex;
  }
  header menu {
    align-items: center;
    margin: 0;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  header menu h1 {
    color: white;
    font-family: "Ubuntu", sans-serif;
  }

  header ul {
    li {
      color: white;
      background: none;
      min-width: max-content;
      cursor: pointer;
      padding: 5px 10px;
      list-style: none;
      margin: 0 2px;
      font-size: 16px;
      border-radius: 3px;
      overflow: hidden;
      border: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      button,
      a {
        background: none;
        padding: 0;
        border: none;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:hover {
        button {
          @media (max-width: 800px) {
            color: #14213d;
          }
        }
      }
      @media (max-width: 800px) {
        margin: 10px auto;
        width: 100%;
        border-radius: 5px;
        padding: 10px 0;
      }
      &:hover {
        background: #00ffcc;
        &,
        * {
          color: #161616;
        }
      }
    }
  }
  header ul {
    display: inline-flex;
    justify-content: center;
    padding: 0;
    text-align: center;
    @media (max-width: 800px) {
      display: grid;
      padding: 0;
      width: 80%;
      margin: auto;
      justify-content: normal;
    }
  }

  @keyframes slideOut {
    0% {
      width: 0;
      height: 0;
      visibility: hidden;
      padding: 0
    }

    100% {
      height: 275px;
      width: 100%;
      padding: 30px
    }
  }
  @keyframes slideIn {
    0% {
      width: 100%;
      padding: 30px;
      height: 275px;
    }

    100% {
      width: 0;
      padding: 0;
      height: 0;
      visibility: hidden;
    }
  }

  .linkDiv {
    margin-right: 10%;
    @media (max-width: 800px) {
      background: #161616;
      position: absolute;
      overflow: hidden;
      display: ${(props) =>
        props.showMenuDropdown === undefined ? " none" : "grid"};
      animation: ${(props) =>
        props.showMenuDropdown
          ? "slideOut .3s  linear forwards "
          : " slideIn .3s  linear forwards"};
      right: 0;
      top: 60px;
      margin: 0;
    }
  }

  .navDiv {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 1.4rem;
    }
    @media (min-width: 800px) {
      margin-left: 10%;
    }
    @media (max-width: 800px) {
      width: 80vw;
    }
  }
`;
