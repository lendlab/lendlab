import React from "react";
import { Stack, Tabs, Image } from "@chakra-ui/react";
import { Heading, Text, ExportButton, Box } from "@ui";

export const SectionInfo = ({
  icon,
  button,
  children,
  title,
  description,
  isSummary,
  institution,
}) => {
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
            {!isSummary && (
              <Text color="lendlab.gray.400" fontSize="16px" noOfLines={[1, 2, 3]} textAlign="left">
                {description}
              </Text>
            )}
            {isSummary && (
              <Stack
                bgGradient="linear(to-l, #031DB7, lendlab.blue)"
                borderTopRadius="30px"
                h="250px"
                justifyContent="center"
                paddingLeft={8}
                position="relative"
              >
                <Image
                  position="absolute"
                  right="0"
                  src="/images/summaryIllustration.svg"
                  top="50%"
                  transform="translateY(-50%)"
                />
                <Text color="#CFE1FF" textAlign="left">
                  ESTÁS ADMINISTRANDO
                </Text>
                <Heading color="white" textAlign="left">
                  UTU BLANES VIALE
                </Heading>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
      {!isSummary && (
        <Tabs justifySelf="flex-end" variant="unstyled">
          {children}
        </Tabs>
      )}
    </Box>
  );
};
