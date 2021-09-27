import React from "react";
import {
  Stack,
  FormLabel,
  Button,
  Image,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Icon,
} from "@chakra-ui/react";
import { Text, Heading, Input, Select, Drawer } from "@ui";
import { Prestamo, Trash } from "@icons";
import { useDisclosure } from "@chakra-ui/hooks";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import moment from "moment";

import { useCart } from "../../hooks/useCart";
import { CartItem } from "..";

const now = moment().minutes(0).seconds(0).add(1, "hours");
const end = now.clone().add(1, "hours");

const LendsDrawer = React.memo(({ isDrawerOpen, onDrawerClose, userButton, btnRef }) => {
  const [material, setMaterial] = React.useState("");

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

  const [dateStart, setDateStart] = React.useState(now.toDate());
  const [dateEnd, setDateEnd] = React.useState(end.toDate());

  const handleStartDateChange = (e) => {
    setDateStart(e);
    console.log(e);
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    console.log(e);
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
                  {cart.map(({ desc, nombre, src }, index) => (
                    <CartItem
                      key={index}
                      deleteMaterialFromCart={deleteMaterialFromCart}
                      desc={desc}
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
                <DateTimePicker value={dateStart} onChange={handleStartDateChange} />
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
                <DateTimePicker value={dateEnd} onChange={handleEndDateChange} />
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
            <Button isFullWidth colorScheme="blue" variant="primary">
              Crear nuevo prestamo
            </Button>
            <Button isFullWidth mt={3} variant="secondary" onClick={onDrawerClose}>
              Cancelar
            </Button>
          </>
        }
        icon={Prestamo}
        isOpen={isDrawerOpen}
        size="lg"
        title="Crear Nuevo Prestamo"
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
              name="material"
              placeholder="Buscar Material"
              value={material}
              onChange={(e) => {
                setMaterial(e.target.value);
                filterMaterials(material);
              }}
            />
          </ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              {materials.slice(0, 3).map(({ src, nombre, desc }, index) => (
                <CartItem
                  key={index}
                  notShowTrash
                  cursor="pointer"
                  deleteMaterialFromCart={deleteMaterialFromCart}
                  desc={desc}
                  nombre={nombre}
                  src={src}
                  onClick={() => {
                    addMaterialToCart({ src, nombre, desc });
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
});

export default LendsDrawer;
