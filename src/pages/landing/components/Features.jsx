import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { FEATURES_DATA } from "@utils/constants/landing";
import { Heading, Text } from "@components/texts";

export const Features = () => {
  const { features, actions } = FEATURES_DATA;

  return (
    <Box id="features" paddingTop="20rem">
      <Container alignSelf="center" maxW="container.xl">
        <Stack spacing={28}>
          {features.map((feature, index) => (
            <Stack key={index} direction={feature.direction} spacing={8}>
              <Stack justifyContent="center" w="50%">
                <Image src={feature.illustration} />
              </Stack>
              <Stack justifyContent="center" spacing={8} w="50%">
                <Heading fontSize="4xl" textAlign="left">
                  {feature.title}
                </Heading>
                <Text fontSize="16px" textAlign="left">
                  {feature.description}
                </Text>
                <SimpleGrid key={index} columns={2} spacing={4}>
                  {actions.map((action, index) => (
                    <Stack key={index} direction="row" spacing={4}>
                      <Icon as={action.icon} />
                      <Text fontSize="16px">{action.name}</Text>
                    </Stack>
                  ))}
                </SimpleGrid>
                <Button rightIcon={feature.button.icon()} variant="primary" w="15em">
                  {feature.button.text}
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
