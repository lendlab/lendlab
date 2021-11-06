import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { Field } from "./Field";

const ExportButton = ({ tabla, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button {...props} variant="secondary" onClick={onOpen}>
        Exportar
      </Button>
      <Formik initialValues={{ name: "", sheet: "" }} validateOnChange={false}>
        {({ values, dirty }) => (
          <Modal
            isCentered
            finalFocusRef={finalRef}
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Exportar tabla</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Stack as={Form} spacing="6">
                  <Field
                    ref={initialRef}
                    label="Nombre del archivo"
                    name="name"
                    placeholder="ej. Tabla de Reservas"
                  />
                  <Field label="Nombre de la hoja de excel" name="sheet" placeholder="ej. Hoja 1" />
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button
                  isFullWidth
                  as={ReactHTMLTableToExcel}
                  buttonText="Exportar"
                  filename={values.name}
                  sheet={values.sheet}
                  table={tabla}
                  variant="primary"
                />
                <Button isFullWidth ml="4" variant="secondary" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Formik>
    </>
  );
};

export default ExportButton;
