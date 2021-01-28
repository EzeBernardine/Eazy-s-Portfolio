import React from "react";
import { CirclesStyle } from "./styles.js";
import { Flex } from "../Box/styles";

const Circles = ({
  lowest = 30,
  color = "#484848",
  highest,
  size = 30,
  className = "circles",
}) => {
  return (
    <CirclesStyle color={color} highest={highest} className={className}>
      {Array.from(Array(lowest), (item, index) =>
        index * size < highest ? (
          <Flex width={index * size + "px"} height={index * size + "px"}></Flex>
        ) : null
      )}
    </CirclesStyle>
  );
};

export default Circles;
