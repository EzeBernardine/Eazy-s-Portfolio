import React from "react";
import { StacksStyle, ScaleStyles, LineScaleStyles } from "./styles";
import { Flex, Grid } from "../Box/styles"; 

const Stack = () => {
  const Stacks = [
    {
      name: "Javascript ES6",
      range: 80,
      expKey: 1,
    },
    {
      name: "Nodejs",
      range: 94,
      expKey: 12,
    },
    {
      name: "Express",
      range: 80,
      expKey: 13,
    },
    {
      name: "MongoDB",
      range: 80,
      expKey: 14,
    },
    {
      name: "GraphQL",
      range: 90,
      expKey: 15,
    },
    {
      name: "HTML",
      range: 95,
      expKey: 16,
    },
    {
      name: "CSS",
      range: 70,
      expKey: 16,
    },
    {
      name: "Typescript",
      range: 70,
      expKey: 16,
    },
  ];
  return (
    <StacksStyle>
      <h1>My Stack</h1>
      <Grid
        className="container"
        gridCol="repeat(12, 1fr)"
        gap="0"
        width="max-content"
      >
        {Stacks.map(({ range, name }) => (
          <ScaleStyles
            className="stack"
            alignItems="flex-end"
            range={range}
            width={200}
            height={400}
            lightBgColor="#AEF2E5"
            rangeBgColor="#00FFCCCF"
            darkBgColor="#026854CF"
          >
            <span className="name">{name}</span>
            <div className="scale-range"></div>
          </ScaleStyles>
        ))}
      </Grid>

      <Grid
        className="line-scale-container"
        gridCol=" 1fr"
        gap="40px"
        width="90%"
      >
        {Stacks.map(({ range, name }) => (
          <LineScaleStyles
            range={range}
            justifyContent="flex-start"
            lightBgColor="#AEF2E5"
            rangeBgColor="#00FFCCCF"
            darkBgColor="#026854CF"
          >
            <Flex className="line-scale-name" justifyContent="space-between">
              <span>{name}</span>
              <span>{range}%</span>
            </Flex>
            <div className="line-scale-range"></div>
          </LineScaleStyles>
        ))}
      </Grid>
    </StacksStyle>
  );
};
export default Stack;
// linear-gradient(to bottom,#AEF2E5 29%,#0FC,#161616b3 89%)
