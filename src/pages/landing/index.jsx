import React from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
// import About from "../../component/About";
import Services from "../../component/Services";
// import Experience from "../../component/Experience";
import Stack from "../../component/Stacks";
// import ContactMe from "../../component/ContactMe";
import Works from "../../component/works";
import Footer from "../../component/Footer";

const Landing = () => {
  return (
    <LandingStyle>
      <Menu />

      <Header />
      <Services />
      <Works />
      <Stack />
      <Footer />
      {/* <About /> */}
      {/* <Services services={services} /> */}
      {/* <About about={about} />
      <Experience experience={experience} />
      <ContactMe contact={contact} />
      */}
    </LandingStyle>
  );
};

export default Landing;
