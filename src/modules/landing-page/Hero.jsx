import React from "react";
import { Button, Container, Stack } from "@chakra-ui/react";
import { HERO_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold, WhiteCircle, Box } from "@ui";
import { motion } from "framer-motion";
import InView from "react-intersection-observer";

export const Hero = () => {
  return (
    <Container alignSelf="center" maxW="container.xl" minH="85vh">
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
              minH="85vh"
              paddingTop={8}
              spacing={4}
              w="full"
            >
              <Heading fontSize="9" maxW="15em">
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
              <Text fontSize="6" w="70%">
                {HERO_DATA.weLet}
                <Bold>{HERO_DATA.bold}</Bold>
              </Text>

              <Button rightIcon={HERO_DATA.button.icon()} variant="primary">
                {HERO_DATA.button.text}
              </Button>
            </Stack>
            <Stack ali direction="row" spacing={28} w="full">
              <WhiteCircle size="medium" />
              <WhiteCircle size="little" />
            </Stack>
          </Box>
        )}
      </InView>
    </Container>
  );
};
