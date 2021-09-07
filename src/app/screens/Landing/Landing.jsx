import {Button} from "@chakra-ui/button";
import {Image} from "@chakra-ui/image";
import {Heading, Stack, Text} from "@chakra-ui/layout";
import React from "react";

import {landingData} from "~/app/constants/landing";
import LandingLayout from "~/app/layouts/LandingLayout";

const Landing = () => {
  return (
    <LandingLayout>
      <Stack as="main" direction="row" minH="80vh" w="full">
        <Stack justifyContent="center" spacing={4} w="50%">
          <Stack alignItems="center" direction="row">
            <Image src={landingData.main.flag} />
            <Text fontWeight="bold" paddingLeft={4}>
              {landingData.main.institutionCount}
            </Text>
            <Text>{landingData.main.institutionChoice}</Text>
          </Stack>
          <Heading as="h1" fontSize="6xl">
            {landingData.main.titleOne}
          </Heading>
          <Heading fontSize="6xl">{landingData.main.titleTwo}</Heading>
          <Text fontWeight="bold">{landingData.main.features}</Text>
          <Stack spacing={0}>
            <Text>{landingData.main.information}</Text>
            <Stack direction="row" spacing={1}>
              <Text>{landingData.main.joinNow}</Text>
              <Text fontWeight="bold" marginTop={0} paddingTop={0}>
                {landingData.main.price}
              </Text>
            </Stack>
          </Stack>
          <Button fontSize="xl" leftIcon={landingData.main.button.icon()} padding={6} w="70%">
            {landingData.main.button.text}
          </Button>
        </Stack>
        <Image maxH="80vh" objectFit="contain" src="/images/computerIllustration.svg" />
      </Stack>
      <Stack direction="row" spacing={28} w="full">
        <Image src="/images/mediumSizeCircle.svg" />
        <Image src="/images/littleSizeCircle.svg" />
      </Stack>
    </LandingLayout>
  );
};

export default Landing;
