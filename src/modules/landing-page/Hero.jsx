import React from "react";
import { Button, Container, Stack } from "@chakra-ui/react";
import { HERO_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold, WhiteCircle, Box } from "@ui";
import { motion } from "framer-motion";
import InView from "react-intersection-observer";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Container alignSelf="center" maxW="container.xl" minH="calc(100vh - 4.25rem)">
      <InView>
        {({ ref, inView }) => (
          <Box
            animate={inView && { y: 0, opacity: 1 }}
            as={motion.div}
            initial={{ y: "-10vh", opacity: 0 }}
            innerRef={ref}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <Stack
              alignItems="center"
              as="main"
              direction="column"
              justifyContent="center"
              minH="calc(100vh - 4.25rem)"
              spacing={4}
              w="full"
            >
              <Heading as="h1" fontSize="9" maxW="15em" w="full">
                {HERO_DATA.you}
                <Heading
                  as="span"
                  bgClip="text"
                  bgGradient="linear(to-l, #031DB7, lendlab.blue)"
                  fontSize="6xl"
                  mx="5"
                >
                  {HERO_DATA.gradient}
                </Heading>
                {HERO_DATA.nowOnline}
              </Heading>
              <Text fontSize={{ md: "6", base: "4" }} w={{ md: "70%", base: "90%" }}>
                {HERO_DATA.weLet}
                <Bold>{HERO_DATA.bold}</Bold>
              </Text>
              <Link to="/login">
                <Button rightIcon={HERO_DATA.button.icon()} variant="primary">
                  {HERO_DATA.button.text}
                </Button>
              </Link>
            </Stack>
            <WhiteCircle bottom="-5vh" left="0" position="absolute" size="medium" />
            <WhiteCircle bottom="0" left="60" position="absolute" size="little" />
          </Box>
        )}
      </InView>
    </Container>
  );
};
