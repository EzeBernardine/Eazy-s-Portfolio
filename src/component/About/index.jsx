import React from "react";
import { AboutStyle } from "./styles";
import { Flex } from "../Box/styles";
// import pdf from "../../assets/images/My_Resume.pdf";
// import { ButtonStyled } from "../Button/styles";

const About = () => {
  return (
    <AboutStyle>
      <Flex className="container" justifyContent="center">
        <h1>ABOUT ME</h1>

        <div className="about-me">
          <Flex>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              facere dolor nihil voluptatibus, totam aperiam omnis tempore
              ducimus in! Quisquam fuga corporis dolorem? Cumque deleniti quidem
              mollitia ad, Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aut facere dolor nihil voluptatibus, totam aperiam omnis
              tempore ducimus in! Quisquam fuga corporis dolorem? Cumque
              deleniti quidem mollitia ad, Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aut facere dolor nihil voluptatibus,
              totam aperiam omnis tempore ducimus in! Quisquam fuga corporis
              dolorem? Cumque deleniti quidem mollitia ad, officiis et.
            </p>
          </Flex>
        </div>
        {/* <Flex
              className="btns"
              justifyContent="space-around"
              alignItems="stretch"
            >
              <ButtonStyled text="Download CV" className="button-container">
                <a
                  href={pdf}
                  download="Eazy's_resume.pdf"
                  className="button"
                >
                  Download CV
                </a>
              </ButtonStyled>
            </Flex> */}
      </Flex>
    </AboutStyle>
  );
};
export default About;
