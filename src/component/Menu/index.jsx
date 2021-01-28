import React, { useState } from "react";
import { MenuStyle } from "./styles";
// import { NavLink } from "react-router-dom";
import pdf from "../../assets/images/ezekiel_CV.pdf";
import { Flex } from "../Box/styles";
import MenuIcon from "../MenuIcon";

const Menu = ({ about, contact }) => {
  const [showMenuDropdown, setMenuDisplay] = useState(undefined);

  /**
   * determines if the menu should be displayed or not and on which screen size.
   */
  const handleDisplayMenu = () => setMenuDisplay(!showMenuDropdown);

  /**
   * handles the onclick menu item scroll event.
   * Ensures that on click of any menu item, the browser scrolls to that section of the page
   */
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);
  const executeScrollAbout = () => scrollToRef(about),
    executeScrollContact = () => scrollToRef(contact);

  return (
    <MenuStyle showMenuDropdown={showMenuDropdown}>
      <header>
        <menu>
          <Flex className="navDiv" justifyContent="space-between">
            <h1>Eazy</h1>
            <MenuIcon
              click={handleDisplayMenu}
              showMenuDropdown={showMenuDropdown}
            />
          </Flex>

          <div className="linkDiv">
            <ul>
              <li
                onClick={() => {
                  executeScrollAbout("about");
                  handleDisplayMenu();
                }}
              >
                About
              </li>

              <li
                onClick={() => {
                  executeScrollContact("contact");
                  handleDisplayMenu();
                }}
              >
                Contact
              </li>
              <li>
                <button onClick={() => window.open(pdf)}>Resume</button>
              </li>
              {/* <li>
                <NavLink to="./blog">Blog</NavLink>
              </li> */}
            </ul>
          </div>
        </menu>
      </header>
    </MenuStyle>
  );
};
export default Menu;
