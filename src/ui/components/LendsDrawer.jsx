import { useMutation, useQuery } from "@apollo/client";
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
import { CREATE_LEND } from "@graphql/mutations/lends";
import { CREATE_RESERVATION } from "@graphql/mutations/reservations";
import { useCart } from "@hooks/useCart";
import { Prestamo } from "@icons";
import { Drawer, Input, Select, Text } from "@ui";
import moment from "moment";
import React from "react";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import { GET_ALL_RESERVATIONS } from "@graphql/queries/reservations";

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
      clearCart,
      filterMaterials,
      addMaterialToCart,
      deleteMaterialFromCart,
      cartCount,
      materials,
    } = useCart();

    const [
      createLend,
      { data: createLendData, loading: createLendLoading, error: createLendError },
    ] = useMutation(CREATE_LEND);

    const [
      createReservation,
      {
        data: createReservationData,
        loading: createReservationLoading,
        error: createReservationError,
      },
    ] = useMutation(CREATE_RESERVATION);

    const {
      loading: loadingReservation,
      error: errorReservation,
      data: dataReservation,
    } = useQuery(GET_ALL_RESERVATIONS);

    if (loadingReservation) return <div>loading...</div>;
    if (errorReservation) return <div>{""}</div>;

    const groupAndMerge = (arr, groupBy, mergeInto) =>
      Array.from(
        arr
          .reduce((m, o) => {
            const curr = m.get(o[groupBy]);

            return m.set(o[groupBy], {
              ...o,
              [mergeInto]: [...((curr && curr[mergeInto]) || []), o[mergeInto]],
            });
          }, new Map())
          .values()
      );

    const reservationsGrouped = groupAndMerge(
      dataReservation.getReservations,
      "id_reserva",
      "material"
    );

    const maxReserveId = reservationsGrouped.length + 1;

    const handleStartDateChange = (e) => {
      setDateStart(e);
    };

    const handleEndDateChange = (e) => {
      setDateEnd(e);
    };

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
                    {cart.map(({ id, desc, nombre, src }, index) => (
                      <CartItem
                        key={index}
                        deleteMaterialFromCart={deleteMaterialFromCart}
                        desc={desc}
                        id={id}
                        nombre={nombre}
                        src={src}
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
                  cart.map(({ id }, index) => {
                    const fecha_hora = moment().add(index, "seconds").toDate();

                    createReservation({
                      variables: {
                        data: {
                          id_reserva: maxReserveId,
                          finalizada: false,
                          fecha_hora,
                          user: {
                            cedula: parseInt(userSelected.cedula),
                          },
                          material: {
                            id_material: id,
                          },
                        },
                      },
                      update: (cache) => {
                        cache.evict({ fieldName: "getReservations" });
                      },
                    });
                  });

                  createLend({
                    variables: {
                      data: {
                        id_lend: 0,
                        fecha_hora_presta: "",
                        fecha_vencimiento: dateEnd,
                        fecha_devolucion: "",
                        reservation: {
                          id_reserva: maxReserveId,
                        },
                      },
                    },
                    update: (cache) => {
                      cache.evict({ fieldName: "lend" });
                      onDrawerClose();
                      toast({
                        title: `Se ha creado correctamente el prestamo!`,
                        description: "Lo has hecho correctamente c:",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                    },
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
                  filterMaterials(material);
                }}
                onResetClick={() => {
                  setMaterial("");
                  filterMaterials("");
                }}
              />
            </ModalHeader>
            <ModalBody>
              <Stack spacing={4}>
                {materials.slice(0, 3).map(({ id, src, nombre, desc }, index) => (
                  <CartItem
                    key={index}
                    notShowTrash
                    cursor="pointer"
                    deleteMaterialFromCart={deleteMaterialFromCart}
                    desc={desc}
                    id={id}
                    nombre={nombre}
                    src={src}
                    onClick={() => {
                      addMaterialToCart({ id, src, nombre, desc });
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
