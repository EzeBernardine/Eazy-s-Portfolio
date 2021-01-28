import React from "react";
import { FooterStyle } from "./styles";
import { Flex } from "../Box/styles";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { AiOutlineTwitter, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterStyle>
      <p>@2021</p>
      <Flex>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://web.facebook.com/ezekielobinwa"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/ezekiel_obinwa"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ezekielblanc/"
            >
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@ezekielblanc1"
            >
              <FaMediumM />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Ezekielblanc1"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gitlab.com/Ezzy"
            >
              <AiFillGitlab />
            </a>
          </li>
        </ul>
      </Flex>
    </FooterStyle>
  );
};
export default Footer;
