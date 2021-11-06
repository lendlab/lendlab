import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { cartItemsVar } from "@/cache";

const MaterialInfoModal = ({ material }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button isFullWidth variant="primary" onClick={onOpen}>
        Ver más
      </Button>
      <Modal isCentered isOpen={isOpen} scrollBehavior={"inside"} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{material.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab nesciunt modi sit
              blanditiis laboriosam, ex sunt. Dolor quam eos rem non repellat dolorum at inventore
              officia, placeat soluta est!
            </Text>
            <Stack align="center" direction="row" justify="space-between" mt="4">
              <Badge variant="solid">{material.categoria}</Badge>
              <Badge variant="solid">{material.estado}</Badge>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              isFullWidth
              variant="primary"
              onClick={() => {
                cartItemsVar([...cartItemsVar(), material]);
                onClose();
              }}
            >
              Agregar al carrito
            </Button>
            <Button isFullWidth ml="4" variant="secondary" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MaterialInfoModal;
