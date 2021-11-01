import React from "react";
import { Container, SimpleGrid, Stack, Button, Image, Icon } from "@chakra-ui/react";
import { FEATURES_DATA } from "@utils/constants/landing";
import { Heading, Text, Box } from "@ui";
import InView from "react-intersection-observer";
import { motion } from "framer-motion";

export const Features = () => {
  const { features, actions } = FEATURES_DATA;

  return (
    <Box id="features" paddingTop="20rem">
      <Container alignSelf="center" maxW="container.xl">
        <Stack spacing={28}>
          {features.map((feature, index) => (
            <InView key={index} threshold={0.25}>
              {({ ref, inView }) => (
                <Box
                  animate={inView && { x: 0, opacity: 1 }}
                  as={motion.div}
                  initial={{ x: "-20vw", opacity: 0 }}
                  innerRef={ref}
                  transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                  <Stack direction={{ md: feature.direction, base: "column" }} spacing={8}>
                    <Stack justifyContent="center" w={{ md: "50%", base: "100%" }}>
                      <Image src={feature.illustration} />
                    </Stack>
                    <Stack
                      alignItems={{ base: "center", md: "start" }}
                      justifyContent="center"
                      spacing={8}
                      w={{ md: "50%", base: "100%" }}
                    >
                      <Heading textAlign={{ base: "center", md: "left" }}>{feature.title}</Heading>
                      <Text textAlign={{ base: "center", md: "left" }}>{feature.description}</Text>
                      <SimpleGrid key={index} columns={2} spacing={4}>
                        {actions.map((action, index) => (
                          <Stack key={index} direction="row" spacing={4}>
                            <Icon as={action.icon} />
                            <Text>{action.name}</Text>
                          </Stack>
                        ))}
                      </SimpleGrid>
                      <Button
                        rightIcon={feature.button.icon()}
                        variant="primary"
                        w={{ md: "15em", base: "full" }}
                      >
                        {feature.button.text}
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              )}
            </InView>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
