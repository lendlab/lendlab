import { Button } from "@chakra-ui/button";
import {
  Code,
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
import { useMe } from "@graphql/auth/custom-hook";
import { useCart } from "@graphql/cart/custom-hooks";
import { useCreateReservation } from "@graphql/reservations/custom-hooks";
import moment from "moment";
import React from "react";

import { cartItemsVar } from "@/cache";

const CartModal = () => {
  const { data, loading } = useCart();
  const { data: dataMe } = useMe();
  const [
    createReservation,
    { loading: loadingCreate },
    { loading: loadingId, data: dataId },
  ] = useCreateReservation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (loading || loadingId || !data || !dataId) return null;

  return (
    <>
      {data.itemsCount > 0 && (
        <>
          <Button boxShadow="md" variant="primary" onClick={onOpen}>
            {data.itemsCount} materiales en tu carrito
          </Button>
          <Modal isCentered isOpen={isOpen} size="5xl" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Tu carrito</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack>
                  {data.cartItems.map((item, i) => (
                    <Stack
                      key={i}
                      rounded="lg"
                      borderWidth={1}
                      borderColor="lendlab.light.black.300"
                      bg="lendlab.light.black.200"
                      padding={8}
                    >
                      <Text color="lendlab.light.black.1000" fontWeight="bold">
                        {item.nombre}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button
                  isFullWidth
                  loading={loadingCreate}
                  loadingText="Creando reserva..."
                  mr={3}
                  variant="primary"
                  onClick={async () => {
                    data.cartItems.map((material, i) => {
                      const fecha_hora = moment()
                        .add(i, "seconds")
                        .format("YYYY-MM-DD HH:mm:ss");

                      return createReservation({
                        variables: {
                          data: {
                            id_reserva: dataId.getMaxId + 1,
                            user: {
                              cedula: parseInt(dataMe.me.cedula),
                            },
                            material: {
                              id_material: parseInt(material.id_material),
                            },
                            fecha_hora: fecha_hora,
                            finalizada: false,
                            institution: {
                              id_institution: parseInt(
                                dataMe.me.course.institution.id_institution
                              ),
                            },
                          },
                        },
                        update: (cache) => {
                          cartItemsVar([]);
                          cache.evict({ fieldName: "getMaxId" });
                          cache.evict({ fieldName: "getUserReservations" });
                          onClose();
                        },
                      });
                    });
                  }}
                >
                  Reservar
                </Button>
                <Button isFullWidth variant="secondary" onClick={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default CartModal;
