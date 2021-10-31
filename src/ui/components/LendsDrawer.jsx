import { useQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ME } from "@graphql/mutations/auth";
import { useCart } from "@hooks/useCart";
import { useLend } from "@hooks/useLend";
import { Prestamo } from "@icons";
import { Drawer, Input, Select, Text } from "@ui";
import moment from "moment";
import React, { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

import { CartItem } from "..";

const now = moment().minutes(0).seconds(0).add(1, "hours");
const end = now.clone().add(1, "hours");

const LendsDrawer = React.memo(
  ({ isDrawerOpen, onDrawerClose, userButton, btnRef, userSelected }) => {
    const [dateStart, setDateStart] = React.useState(now.toDate());
    const [dateEnd, setDateEnd] = React.useState(end.toDate());
    const [material, setMaterial] = React.useState("");
    const toast = useToast();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
    const {
      cart,
      getMaterials,
      clearCart,
      filterMaterials,
      addMaterialToCart,
      deleteMaterialFromCart,
      cartCount,
      isSearching,
      foundMaterials,
      materials,
    } = useCart();

    const { data: me } = useQuery(ME);

    useEffect(() => {
      getMaterials();
    }, []);

    const {
      createReservationLoading,
      createLendLoading,
      maxReserveId,
      createLend,
      createReservation,
    } = useLend();

    const handleStartDateChange = (e) => {
      setDateStart(e);
    };

    const handleEndDateChange = (e) => {
      setDateEnd(e);
    };

    const currentMaterials = isSearching ? foundMaterials : materials;

    return (
      <>
        <Drawer
          isNotCenter
          materialsSelected
          body={
            <Stack spacing={8}>
              <Stack spacing={2}>
                <FormLabel>Usuario</FormLabel>
                {userButton}
              </Stack>

              <Stack spacing={2}>
                <FormLabel>Materiales ({cartCount})</FormLabel>
                <Stack
                  bg="lendlab.gray.100"
                  borderRadius="17px"
                  maxH="300px"
                  overflowY="scroll"
                  padding={4}
                >
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    <Text fontSize="2" textAlign="left">
                      Puedes agregar más de 1 material
                    </Text>
                    <Button fontSize="1" variant="primary" onClick={onModalOpen}>
                      Agregar material
                    </Button>
                  </Stack>
                  <Stack>
                    {cart.map(({ id_material, descripcion, nombre, foto }, index) => (
                      <CartItem
                        key={index}
                        deleteMaterialFromCart={deleteMaterialFromCart}
                        desc={descripcion}
                        id={id_material}
                        nombre={nombre}
                        src={foto}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <FormLabel>Plazo</FormLabel>
                <Stack alignItems="center" direction="row" position="relative" w="100%">
                  <DateTimePicker
                    customInput={Input}
                    disabled={true}
                    minDate={dateStart}
                    value={dateStart}
                    onChange={handleStartDateChange}
                  />
                  {/* <Circle
                    bg="lendlab.gray.100"
                    left="49%"
                    marginRight="auto"
                    position="absolute"
                    size="40px"
                    transform="translate(-50%, 0)"
                    zIndex="300"
                  >
                    -
                  </Circle> */}
                  <DateTimePicker
                    minDate={dateStart}
                    value={dateEnd}
                    onChange={handleEndDateChange}
                  />
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <FormLabel>Tipo</FormLabel>

                <Select
                  options={[
                    { key: "Externo", value: "Externo" },
                    { key: "Interno", value: "Interno" },
                  ]}
                  placeholder="Selecciona un tipo"
                />
              </Stack>
            </Stack>
          }
          btnRef={btnRef}
          footer={
            <>
              <Button
                isFullWidth
                colorScheme="blue"
                isLoading={createLendLoading || createReservationLoading}
                variant="primary"
                onClick={() => {
                  cart.map(({ id_material }, index, arr) => {
                    const fecha_hora = moment().add(index, "seconds").toDate();

                    createReservation({
                      variables: {
                        data: {
                          id_reserva: parseFloat(maxReserveId),
                          finalizada: true,
                          fecha_hora,
                          user: {
                            cedula: parseInt(userSelected.cedula),
                          },
                          material: {
                            id_material,
                          },
                        },
                      },
                      update: (cache, { data: { createReservation } }) => {
                        cache.evict({ fieldName: "getReservations" });
                        if (arr.length - 1 === index) {
                          createLend({
                            variables: {
                              data: {
                                fecha_hora_presta: fecha_hora,
                                fecha_vencimiento: dateEnd,
                                fecha_devolucion: "",
                                reservation: {
                                  id_reserva: createReservation.id_reserva,
                                  fecha_hora: fecha_hora,
                                },
                                laboratorist: parseInt(me.me.cedula),
                              },
                            },
                            update: (cache) => {
                              cache.evict({ fieldName: "lend" });
                              onDrawerClose();
                              clearCart();
                              toast({
                                title: `Se ha creado correctamente el prestamo!`,
                                description: "Lo has hecho correctamente c:",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                              });
                            },
                          });
                        }
                      },
                    });
                  });
                }}
              >
                Crear nuevo préstamo
              </Button>
              <Button isFullWidth mt={3} variant="secondary" onClick={onDrawerClose}>
                Cancelar
              </Button>
            </>
          }
          icon={Prestamo}
          isOpen={isDrawerOpen}
          size="lg"
          title="Crear Nuevo Préstamo"
          onClose={() => {
            onDrawerClose();
            clearCart();
          }}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            onModalClose();
            setMaterial("");
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Input
                notWithFormik
                name="material"
                placeholder="Buscar Material"
                value={material}
                onChange={(e) => {
                  setMaterial(e.target.value);
                  filterMaterials(e.target.value.trim());
                }}
                onResetClick={() => {
                  setMaterial("");
                  filterMaterials("");
                }}
              />
            </ModalHeader>
            <ModalBody>
              <Stack spacing={4}>
                {currentMaterials.length > 0 &&
                  currentMaterials
                    .slice(0, 10)
                    .map(({ id_material, foto, nombre, descripcion }, index) => (
                      <CartItem
                        key={index}
                        notShowTrash
                        cursor="pointer"
                        deleteMaterialFromCart={deleteMaterialFromCart}
                        desc={descripcion}
                        id={id_material}
                        nombre={nombre}
                        src={foto}
                        onClick={() => {
                          addMaterialToCart({ id_material, foto, nombre, descripcion });
                          onModalClose();
                          setMaterial("");
                        }}
                      />
                    ))}
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
);

export default LendsDrawer;
