import React from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  Stack,
  Center,
  Divider,
} from "@chakra-ui/react";
import { Heading, Text } from "@ui";

export const Drawer = React.memo(
  ({
    isOpen,
    onClose,
    btnRef,
    placement = "right",
    title,
    icon,
    hasNotOverlay,
    hasNotCloseButton,
    hasNotFooter,
    hasNotBody,
    isSpaceBetween,
    header,
    body,
    footer,
    isNotCenter,
    hasDivider,
    isText,
    ...props
  }) => {
    return (
      <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose} {...props}>
        {!hasNotOverlay && <DrawerOverlay />}
        <DrawerContent>
          {!hasNotCloseButton && <DrawerCloseButton />}
          <DrawerHeader>
            <Stack
              alignItems="center"
              direction={isNotCenter || isSpaceBetween ? "row" : "column"}
              display="flex"
              justifyContent={isSpaceBetween && "space-between"}
              paddingTop={!isSpaceBetween && 12}
              spacing={!isSpaceBetween && 4}
            >
              {icon && <Icon as={icon} h="none" mr={2} size="big" w="none" />}
              {isText ? (
                <Text color="black" fontSize="3">
                  {title}
                </Text>
              ) : (
                <Heading fontSize="8" style={isNotCenter && { textAlign: "left" }}>
                  {title}
                </Heading>
              )}

              {header}
            </Stack>
          </DrawerHeader>
          {hasDivider && (
            <Center h={8}>
              <Divider />
            </Center>
          )}
          {!hasNotBody && <DrawerBody>{body}</DrawerBody>}
          {!hasNotFooter && (
            <DrawerFooter>
              <Stack w="full">{footer}</Stack>
            </DrawerFooter>
          )}
        </DrawerContent>
      </ChakraDrawer>
    );
  }
);
