import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Stack } from "@chakra-ui/layout";
import React from "react";

import { landingData } from "~/app/constants/landing";
import LandingLayout from "~/app/layouts/LandingLayout";
import Heading from "~/ui/text/Heading";
import Text from "~/ui/text/Text";
import Bold from "~/ui/text/Bold";

const Landing = () => {
  const { main } = landingData;

  return (
    <LandingLayout>
      <Stack
        alignItems="center"
        as="main"
        direction="column"
        justifyContent="center"
        minH="80vh"
        paddingTop={8}
        spacing={4}
        w="full"
      >
        <Heading as="h1" fontSize="6xl" maxW="15em" textAlign="center">
          Tú
          <Heading
            as="h2"
            bgClip="text"
            bgGradient="linear(to-l, lendlab.blue,#FFF)"
            fontSize="6xl"
          >
            Institución
          </Heading>
          ahora en forma online
        </Heading>
        <Text textAlign="center" w="70%">
          Te permitimos realizar los prestamos de tu institución. ¿Eres laboratorista?, olvidate del
          lapiz y papel, gestiona ahora! <Bold>Gratuitamente</Bold>
        </Text>
        <Button fontSize={15} size="lg" variant="primary">
          Empezar Ahora
        </Button>
      </Stack>
      <Stack direction="row" spacing={28} w="full">
        <Image src="/images/mediumSizeCircle.svg" />
        <Image src="/images/littleSizeCircle.svg" />
      </Stack>
    </LandingLayout>
  );
};

export default Landing;
