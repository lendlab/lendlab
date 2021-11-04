import Nav from "@components/Nav";
import React from "react";
import Footer from "@components/Footer";

import Administration from "./Administration";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Administration />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
