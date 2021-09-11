import React from "react";
import { LandingLayout } from "@components/layout";

import { Hero, Benefits, Features, AboutUs, OurTeam } from "./components";

export const Landing = () => {
  return (
    <LandingLayout>
      <Hero />
      <Benefits />
      <Features />
      <AboutUs />
      <OurTeam />
    </LandingLayout>
  );
};
