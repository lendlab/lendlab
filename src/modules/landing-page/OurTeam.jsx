import { Avatar } from "@chakra-ui/avatar";
import { Badge, Box, Container, SimpleGrid, Stack } from "@chakra-ui/layout";
import React from "react";
import { OUR_TEAM_DATA } from "@utils/constants/landing";
import { Heading, Text, Bold, WhiteCircle } from "@ui";

export const OurTeam = () => {
  return (
    <Box paddingTop="20rem" position="relative">
      <Container alignSelf="center" maxW="container.xl">
        <Stack spacing={8}>
          <Heading>{OUR_TEAM_DATA.title}</Heading>
          <SimpleGrid columns={{ md: 3, base: 1 }} justifyItems="center" rowGap={12}>
            {OUR_TEAM_DATA.team.map((team, index) => (
              <Stack key={index} alignItems="center">
                <Avatar name={team.name} size="2xl" src={team.img} />
                <Bold>{team.name}</Bold>
                <Badge>
                  <Text>{team.badge}</Text>
                </Badge>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
      <WhiteCircle left="8" position="absolute" size="big" top="50%" />
      <WhiteCircle position="absolute" right="10" size="medium" top="40%" />
    </Box>
  );
};
