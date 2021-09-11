import { Stack } from "@chakra-ui/react";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Container, Box } from "@chakra-ui/react";
import { BENEFITS_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold } from "@components/texts";
import WhiteCircle from "@components/static/WhiteCircle";

export const Benefits = () => {
  return (
    <Box paddingTop="20rem" position="relative">
      <Container alignSelf="center" maxW="container.xl">
        <Stack alignItems="center" spacing={24}>
          <Heading textAlign="center">{BENEFITS_DATA.title}</Heading>
          <SimpleGrid columns={3} justifyItems="center" spacing={14} w="full">
            {BENEFITS_DATA.benefits.map((benefit, index) => (
              <Stack key={index} alignItems="center">
                <Circle bg="lendlab.gray.300" h="2em" w="2em">
                  <Icon as={benefit.icon} />
                </Circle>
                <Bold fontSize="18px">{benefit.name}</Bold>
                <Text fontSize="16px">{benefit.description}</Text>
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
