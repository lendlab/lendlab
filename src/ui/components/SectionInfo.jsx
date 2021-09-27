import React from "react";
import { Stack, Tabs } from "@chakra-ui/react";
import { Heading, Text, ExportButton, Box } from "@ui";

export const SectionInfo = ({ icon, button, children, title, description }) => {
  return (
    <Box marginLeft={{ base: 0, md: 60 }}>
      <Box bg="lendlab.gray.100" paddingX={{ base: 0, md: 40 }}>
        <Stack h="full" justifyContent="space-between" spacing={8}>
          <Stack spacing={6}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              paddingTop={12}
            >
              <Stack alignItems="center" direction="row" spacing={4}>
                {icon}
                <Heading fontSize="4xl" textAlign="left">
                  {title}
                </Heading>
              </Stack>
              <Stack direction="row">
                {button}
                <ExportButton />
              </Stack>
            </Stack>
            <Text color="lendlab.gray.400" fontSize="16px" noOfLines={[1, 2, 3]} textAlign="left">
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Tabs justifySelf="flex-end" variant="unstyled">
        {children}
      </Tabs>
    </Box>
  );
};
