import React from "react";
import { Container, Stack, Icon } from "@chakra-ui/react";
import { ABOUT_US_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold, WhiteCircle, Box } from "@ui";
import { motion } from "framer-motion";
import InView from "react-intersection-observer";

export const AboutUs = () => {
  const { aspects } = ABOUT_US_DATA;

  return (
    <Box id="aboutUs" paddingTop="20rem" position="relative">
      <Container alignSelf="center" maxW="container.xl">
        <Stack spacing={12}>
          <Stack spacing={6}>
            <InView threshold={1}>
              {({ ref, inView }) => (
                <Heading
                  animate={inView && { y: 0, opacity: 1 }}
                  as={motion.h2}
                  initial={{ y: "-10vh", opacity: 0 }}
                  innerRef={ref}
                  position="relative"
                  transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                  {ABOUT_US_DATA.title}
                </Heading>
              )}
            </InView>
            <Text>{ABOUT_US_DATA.subtitle}</Text>
          </Stack>
          <Stack direction="row" spacing={12}>
            {aspects.map((aspect, index) => (
              <Stack key={index} spacing={4}>
                <Icon as={aspect.icon} />
                <Bold>{aspect.name}</Bold>
                <Text fontSize="16px" textAlign="left">
                  {aspect.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
      <WhiteCircle position="absolute" right="8" size="big" top="20%" />
      <WhiteCircle left="10" position="absolute" size="medium" top="40%" />
      <WhiteCircle left="40" position="absolute" size="little" top="90%" />
    </Box>
  );
};
