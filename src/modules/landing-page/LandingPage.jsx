import React from "react";
import { LandingPageLayout } from "@modules/layouts/LandingPageLayout";

import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { Features } from "./Features";
import { AboutUs } from "./AboutUs";
import { OurTeam } from "./OurTeam";

export const LandingPage = () => {
  return (
    <LandingPageLayout>
      <Hero />
      <Benefits />
      <Features />
      <AboutUs />
      <OurTeam />
    </LandingPageLayout>
  );
};
