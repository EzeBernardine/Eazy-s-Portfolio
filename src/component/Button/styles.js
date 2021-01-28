import styled from "styled-components";

const variantSize = (size) =>
  size
    ? size === "sm"
      ? "0.67rem"
      : size === "md"
      ? "0.775rem"
      : size === "lg"
      ? "1rem"
      : ""
    : "0.775rem";

const variantIconSize = (size) =>
  size
    ? size === "sm"
      ? "small"
      : size === "md"
      ? "medium"
      : size === "lg"
      ? "large"
      : ""
    : "medium";

const variantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.5rem 0.9rem"
      : size === "md"
      ? "0.8rem 2rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.8rem 2rem";
  }
};

export const ButtonStyled = styled.div`
  .button {
    border: none;
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "4px"};
    padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
    @media (max-width: 660px) {
      padding: 0.5rem 0.9rem;
    }
    font-size: ${({ size }) => variantSize(size)};
    letter-spacing: 0.02857em;
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
    color: ${({ color }) => color || "#fff"};
    background-color: ${({ bgColor }) => bgColor || "#00FFCC"};
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    outline: 0;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

    &  span {
      display: inline-flex;
      align-items: center;
    }
    &:active,
    &:focus {
      outline: 0;
      border: none;
    }

    &:hover {
      background: ${({ bgColor, hColor }) =>
        hColor ? hColor : bgColor || "#03B38F"};
      color: ${({ bgColor }) => (bgColor ? bgColor : "#161616")};
    }

    &:disabled {
      background: grey;
      cursor: not-allowed;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    .icon {
      padding-right: .5rem;

      svg {
        font-size: ${({ size }) => variantIconSize(size)};
        font-weight: 600;
      }
    }
  }
`;
