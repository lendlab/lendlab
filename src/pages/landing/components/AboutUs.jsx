import Icon from "@chakra-ui/icon";
import { Box, Container, Stack } from "@chakra-ui/layout";
import React from "react";
import { ABOUT_US_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold } from "@components/texts";
import WhiteCircle from "@components/static/WhiteCircle";

export const AboutUs = () => {
  const { aspects } = ABOUT_US_DATA;

  return (
    <Box id="aboutUs" paddingTop="20rem" position="relative">
      <Container alignSelf="center" maxW="container.xl">
        <Stack spacing={12}>
          <Stack spacing={6}>
            <Heading>{ABOUT_US_DATA.title}</Heading>
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
