import React from "react";
import { SectionInfo, Text } from "@ui";
import { Box, Link, Stack, Wrap, Circle, WrapItem, Heading, Icon, Avatar } from "@chakra-ui/react";
import { Prestamo } from "@icons";

export const Summary = () => {
  return (
    <>
      <SectionInfo isSummary title="Resumen" />
      <Box marginLeft={{ base: 0, md: 60 }} paddingX={{ base: 6, md: 18 }}>
        <Wrap align="center" justify="center" marginTop={8} spacing={8}>
          <WrapItem bg="lendlab.gray.100" borderRadius="14px" flex="1" h="200px" padding={4}>
            <Stack h="full" justifyContent="space-between" spacing={2} w="full">
              <Stack>
                <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
                  <Text color="black" fontSize="2" fontWeight="bold">
                    PRESTAMOS
                  </Text>
                  <Link color="blue" fontSize="2">
                    Ver todos
                  </Link>
                </Stack>
                <Heading fontSize="42px">200</Heading>
              </Stack>

              <Stack alignItems="flex-end">
                <Circle bg="lendlab.gray.200" padding={2}>
                  <Icon as={Prestamo} h="none" w="none" />
                </Circle>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem bg="lendlab.gray.100" borderRadius="14px" flex="1" h="200px" padding={4}>
            <Stack h="full" justifyContent="space-between" spacing={2} w="full">
              <Stack>
                <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
                  <Text color="black" fontSize="2" fontWeight="bold">
                    PRESTAMOS
                  </Text>
                  <Link color="blue" fontSize="2">
                    Ver todos
                  </Link>
                </Stack>
                <Heading fontSize="42px">200</Heading>
              </Stack>

              <Stack alignItems="flex-end">
                <Circle bg="lendlab.gray.200" padding={2}>
                  <Icon as={Prestamo} h="none" w="none" />
                </Circle>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem bg="lendlab.gray.100" borderRadius="14px" flex="1" h="200px" padding={4}>
            <Stack h="full" justifyContent="space-between" spacing={2} w="full">
              <Stack>
                <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
                  <Text color="black" fontSize="2" fontWeight="bold">
                    PRESTAMOS
                  </Text>
                  <Link color="blue" fontSize="2">
                    Ver todos
                  </Link>
                </Stack>
                <Heading fontSize="42px">200</Heading>
              </Stack>

              <Stack alignItems="flex-end">
                <Circle bg="lendlab.gray.200" padding={2}>
                  <Icon as={Prestamo} h="none" w="none" />
                </Circle>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem bg="lendlab.gray.100" borderRadius="14px" flex="1" h="200px" padding={4}>
            <Stack h="full" justifyContent="space-between" spacing={2} w="full">
              <Stack>
                <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
                  <Text color="black" fontSize="2" fontWeight="bold">
                    PRESTAMOS
                  </Text>
                  <Link color="blue" fontSize="2">
                    Ver todos
                  </Link>
                </Stack>
                <Heading fontSize="42px">200</Heading>
              </Stack>

              <Stack alignItems="flex-end">
                <Circle bg="lendlab.gray.200" padding={2}>
                  <Icon as={Prestamo} h="none" w="none" />
                </Circle>
              </Stack>
            </Stack>
          </WrapItem>
        </Wrap>
        <Wrap justify="center" marginTop={4} spacing={8}>
          <WrapItem
            bg="lendlab.gray.100"
            borderRadius="14px"
            flex="1"
            maxH={"400px"}
            minH="200px"
            padding={4}
          >
            <Stack spacing={4} w="full">
              <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
                <Text color="black" fontSize="2" fontWeight="bold">
                  ULTIMOS MENSAJES
                </Text>
                <Link color="blue" fontSize="2">
                  Ver todos
                </Link>
              </Stack>
              <Stack direction="row">
                <Avatar />
                <Stack spacing={1} w="full">
                  <Stack direction="row" justifyContent="space-between" w="full">
                    <Text color="black" fontSize="3" fontWeight="bold">
                      Marcos Cianzio
                    </Text>
                    <Text color="lendlab.gray.400" fontSize="2">
                      13:40
                    </Text>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" w="full">
                    <Text isTruncated color="lendlab.gray.400" fontSize="2" maxW={200}>
                      dfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfg
                    </Text>
                    <Circle bg="lendlab.blue" h="20px" w="20px ">
                      <Text color="white" fontSize="1">
                        1
                      </Text>
                    </Circle>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem bg="lendlab.gray.100" borderRadius="14px" flex="1" h="200px" padding={4}>
            <Stack alignItems="center" direction="row" justifyContent="space-between" w="full">
              <Text color="black" fontSize="2" fontWeight="bold">
                PRESTAMOS
              </Text>
              <Link color="blue" fontSize="2">
                Ver todos
              </Link>
            </Stack>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};
