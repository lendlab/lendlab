import {
  Badge,
  Button,
  Icon,
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
import { useCreateLend } from "@graphql/lends/custom-hooks";
import { useRejectOrAcceptReservation } from "@graphql/reservations/custom-hooks";
import { Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import { Field } from "./Field";

const AcceptReservationModal = ({ reservation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, , updateReservation, { loadingUpdate }] = useRejectOrAcceptReservation();

  const { data: dataMe } = useMe();

  const [createLend, { loading: loadingCreateLend }] = useCreateLend();

  return (
    <>
      <Button
        color="lendlab.blue.300"
        leftIcon={<Icon as={FiCheckCircle} color="lendlab.blue.300" />}
        variant="ghost"
        onClick={onOpen}
      >
        Aceptar
      </Button>
      <Modal isCentered isOpen={isOpen} scrollBehavior={"inside"} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aceptar reserva</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ fecha_vencimiento: "" }}
              onSubmit={(values, { resetForm }) => {
                return updateReservation({
                  variables: {
                    data: {
                      finalizada: true,
                    },
                    idReserva: reservation.id_reserva,
                  },
                  update: (cache) => {
                    cache.evict({
                      id_reserva: "Reservation:" + reservation.id_reserva,
                    });

                    const fecha_hora = moment().format("YYYY-MM-DD HH:mm:ss");

                    createLend({
                      variables: {
                        data: {
                          fecha_hora_presta: fecha_hora,
                          fecha_vencimiento: values.fecha_vencimiento,

                          reservation: {
                            id_reserva: parseInt(reservation.id_reserva),
                            fecha_hora: reservation.fecha_hora,
                          },
                          user: {
                            cedula: reservation.user.cedula,
                          },
                          laboratorist: {
                            cedula: dataMe?.me.cedula,
                          },
                          institution: {
                            id_institution: parseInt(reservation.institution.id_institution),
                          },
                        },
                      },
                      update: (cache) => {
                        cache.evict({ fieldName: "getLendsByInstitution" });
                        onClose();
                      },
                    });
                  },
                });
              }}
            >
              <Form id="create-reservation-form">
                <Field
                  label="Fecha de vencimiento"
                  name="fecha_vencimiento"
                  type="datetime-local"
                />
              </Form>
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button
              isFullWidth
              aria-label="Aceptar Reserva"
              form="create-reservation-form"
              isLoading={loadingUpdate || loadingCreateLend}
              type="submit"
              variant="primary"
            >
              Aceptar
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

export default AcceptReservationModal;
