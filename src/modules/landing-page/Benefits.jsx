import React from "react";
import { SimpleGrid, Stack, Circle, Container, Icon } from "@chakra-ui/react";
import { BENEFITS_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold, WhiteCircle, Box } from "@ui";
import InView from "react-intersection-observer";
import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <Box paddingTop="20rem" position="relative">
      <Container alignSelf="center" maxW="container.xl">
        <Stack alignItems="center" spacing={24}>
          <InView threshold={1}>
            {({ ref, inView }) => (
              <Heading
                animate={inView && { y: 0, opacity: 1 }}
                as={motion.h2}
                initial={{ y: "-10vh", opacity: 0 }}
                innerRef={ref}
                textAlign="center"
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              >
                {BENEFITS_DATA.title}
              </Heading>
            )}
          </InView>

          <SimpleGrid columns={{ base: 1, md: 3 }} justifyItems="center" spacing={14} w="full">
            {BENEFITS_DATA.benefits.map((benefit, index) => (
              <Stack key={index} alignItems="center">
                <Circle bg="lendlab.gray.300" h="2em" w="2em">
                  <Icon as={benefit.icon} />
                </Circle>
                <Bold fontSize={{ md: "6", base: "5" }}>{benefit.name}</Bold>
                <Text>{benefit.description}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
      <WhiteCircle left="8" position="absolute" size="medium" top="20%" />
      <WhiteCircle left="40" position="absolute" size="little" top="60%" />
      <WhiteCircle position="absolute" right="40" size="little" top="35%" />
      <WhiteCircle position="absolute" right="20" size="big" top="70%" />
    </Box>
  );
};
