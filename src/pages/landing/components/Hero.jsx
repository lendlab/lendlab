import { Stack } from "@chakra-ui/layout";
import React from "react";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { HERO_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold } from "@components/texts";
import WhiteCircle from "@components/static/WhiteCircle";

export const Hero = () => {
  return (
    <Container alignSelf="center" maxW="container.xl" minH="100vh">
      <Stack
        alignItems="center"
        as="main"
        direction="column"
        justifyContent="center"
        minH="90vh"
        paddingTop={8}
        spacing={4}
        w="full"
      >
        <Heading as="h1" fontSize="6xl" maxW="15em">
          {HERO_DATA.you}
          <Heading
            as="h2"
            bgClip="text"
            bgGradient="linear(to-l, lendlab.blue,#FFF)"
            fontSize="6xl"
          >
            {HERO_DATA.gradient}
          </Heading>
          {HERO_DATA.nowOnline}
        </Heading>
        <Text w="70%">
          {HERO_DATA.weLet}
          <Bold>{HERO_DATA.bold}</Bold>
        </Text>
        <Button fontSize={15} leftIcon={HERO_DATA.button.icon()} size="lg" variant="primary">
          {HERO_DATA.button.text}
        </Button>
      </Stack>
      <Stack ali direction="row" spacing={28} w="full">
        <WhiteCircle size="medium" />
        <WhiteCircle size="little" />
      </Stack>
    </Container>
  );
};
