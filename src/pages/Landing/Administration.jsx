import { Icon, useColorModeValue } from "@chakra-ui/react";
import { Box, Circle, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/react";
import { BENEFITS } from "@utils/constants/benetits";
import React from "react";

const Administration = () => {
  return (
    <Box
      bg={useColorModeValue("lendlab.light.black.200", "lendlab.dark.black.200")}
      borderColor={useColorModeValue("lendlab.light.black.300", "lendlab.dark.black.300")}
      borderWidth="1px 0 1px 0"
    >
      <Container variant="landing">
        <Stack spacing="8" w="full">
          <Stack alignItems="start" direction="row" justifyContent="center">
            <Badge variant="solid">Administración</Badge>
          </Stack>

          <Heading fontSize={{ md: "8", base: "7" }} textAlign="center">
            Un sistema de administración
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} justifyItems="center" spacing="6" w="full">
            {BENEFITS.map(({ name, icon, description }, index) => (
              <Stack key={index} alignItems="center">
                <Circle h="8" w="8">
                  <Icon as={icon} />
                </Circle>
                <Text as="b" fontSize="5" variant="bold">
                  {name}
                </Text>
                <Text textAlign="center">{description}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Administration;
