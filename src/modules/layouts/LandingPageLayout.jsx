import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>inicio | lendlab</title>
        <meta
          content="Administra, gestiona y realiza los prestamso de tu institución, ahora en forma online con LendLab."
          name="description"
        />
        <meta
          content="Presentar a los usuarios la aplicación Lendlab, a forma de LandingPage"
          name="subject"
        />
        <meta
          content="lendlab, landingpage, inicio, prestamos, institucion, uruguay, escuelas, instituciones, materiales, administracion, gestion"
          name="keywords"
        />
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
