import React from "react";
import { LandingStyle } from "./styles.js";
import { Flex, Grid } from "../Box/styles";
import Button from "../Button";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import Circles from "../Circles";
import About from "../About";

const Landing = () => {
  return (
    <LandingStyle>
      <section className="main_container">
        <Flex className="sub-main">
          <Flex className="profile">
            <Grid width="50%" className="caption-container" gap="20px">
              <div className="caption">
                <h1>I'm Ezekiel</h1>
                <h3>Back-end Developer</h3>
              </div>
              <div className="more-detail">
                <p>
                  Let’s have a conversation! I’d love to hear about what you’re
                  working on and find a way to work together.
                </p>
              </div>
              <div className="chart">
                <Button
                  color="#161616"
                  text="Chat"
                  size="sm"
                  icon={<MdChatBubbleOutline />}
                />
                <span className="direct">
                  <FaArrowUp />
                </span>
              </div>
            </Grid>

            <Flex className="image-container" width="50%">
              <div className="image-sub">
                <img src={require("../../assets/images/ezekiel.jpg")} alt="" />
              </div>
              <Circles
                highest={300}
                color="#484848"
                className={"grey-circles"}
              />
              <Circles highest={400} color="#00FFCC" className={"circles"} />
            </Flex>
          </Flex>
        </Flex>

        <About />
        {/* <Services services={"services"} /> */}
      </section>
    </LandingStyle>
  );
};

export default Landing;
