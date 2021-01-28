import React from "react";
import { WorksStyle } from "./styles";
import { Flex, Grid } from "../Box/styles";
import { projects } from "./data";

const Works = () => {
  return (
    <WorksStyle>
      <div className="container">
        <h2>Get an overview of my latest projects</h2>

        <Grid
          gridCol="1fr 1fr 1fr"
          gridRow="300px 300px"
          className="works"
          gap="30px"
          alignItems="stretch"
        >
          {projects.map(({ name, year, stacks, key, url }) => (
            <div key={key}>
              <a href={url} >
                <header>
                  <h3>
                    {name}
                    <sub>{year}</sub>
                  </h3>
                </header>

                <ul>
                  {stacks.map(({ name, icon }) => (
                    <li>
                      <Flex width="max-content">
                        <span>{name}</span>

                        <Flex className="imgFrame">
                          <img src={icon} alt="" />
                        </Flex>
                      </Flex>
                    </li>
                  ))}
                </ul>
                <div className="clipped"></div>
              </a>
            </div>
          ))}
        </Grid>
      </div>
    </WorksStyle>
  );
};
export default Works;
