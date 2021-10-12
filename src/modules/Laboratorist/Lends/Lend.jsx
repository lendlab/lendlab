import { Box, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import { Text } from "@ui";
import { Arrow } from "@icons";
import { Button } from "@chakra-ui/button";

export const Lend = ({ history }) => {
  const { id } = useParams();

  return (
    <Box marginLeft={{ base: 0, md: 60 }}>
      <Box bg="lendlab.gray.100" paddingX={{ base: 0, md: 18 }}>
        <Stack h="full" justifyContent="space-between" spacing={8}>
          <Stack spacing={6}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              paddingTop={12}
            >
              <Stack alignItems="center" direction="row" spacing={4}>
                <Button
                  leftIcon={<Arrow direction="left" fill="#000" />}
                  variant="secondary"
                  onClick={() => history.goBack()}
                />
                <Heading fontSize="4xl" textAlign="left">
                  aaaaaaaa
                </Heading>
              </Stack>
            </Stack>
            <Text color="lendlab.gray.400" fontSize="16px" noOfLines={[1, 2, 3]} textAlign="left">
              ASDAF
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
