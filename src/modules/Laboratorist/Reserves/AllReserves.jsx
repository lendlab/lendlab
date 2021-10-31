import empty from "@animations/empty.json";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Avatar } from "@chakra-ui/avatar";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Badge, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import "moment/locale/es";
import { Tooltip } from "@chakra-ui/tooltip";
import { GET_ALL_RESERVATIONS } from "@graphql/queries/reservations";
import { SkeletonTable, Table, Text } from "@ui";
import Lottie from "lottie-web";
import moment from "moment/min/moment-with-locales";
import { CREATE_LEND } from "@graphql/mutations/lends";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import { DELETE_RESERVATION, UPDATE_RESERVATION } from "../../../graphql/mutations/reservations";

const now = moment().minutes(0).seconds(0).add(1, "hours");
const end = now.clone().add(1, "hours");

moment.locale("es");

export const AllReserves = () => {
  const { loading, error, data } = useQuery(GET_ALL_RESERVATIONS, {
    pollInterval: 500,
  });
  const [createLend, { data: createLendData, loading: createLendLoading, error: createLendError }] =
    useMutation(CREATE_LEND);
  const [
    updateReservation,
    {
      data: updateReservationData,
      loading: updateReservationLoading,
      error: updateReservationError,
    },
  ] = useMutation(UPDATE_RESERVATION);
  const [
    deleteReservation,
    {
      data: deleteReservationData,
      loading: deleteReservationLoading,
      error: deleteReservationError,
    },
  ] = useMutation(DELETE_RESERVATION);
  const toast = useToast();
  const container = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: empty,
    });

    return () => {
      animation.destroy();
    };
  }, [loading, data]);

  if (loading) return <SkeletonTable />;

  if (error)
    return (
      <Alert
        alignItems="center"
        borderBottomRadius="18px"
        flexDirection="column"
        height="200px"
        justifyContent="center"
        status="error"
        textAlign="center"
        variant="subtle"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontSize="lg" mb={1} mt={4}>
          Ha ocurrido un error: {error.message}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          ¡No es tu culpa! Estamos trabajando para solucionarlo
        </AlertDescription>
      </Alert>
    );

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

  const reservationsGrouped = groupAndMerge(data.getReservations, "id_reserva", "material");

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "id_reserva",
    },
    {
      Header: "Fecha y Hora",
      accessor: (d) => {
        return `${moment(parseInt(d.fecha_hora)).format("D [de] MMMM [del] YYYY [a las] H:mm")} ||
          ${moment(parseInt(d.fecha_hora)).format("D[/]M[/]YY")}
        }`;
      },
      Cell({ row }) {
        const sqlDate = parseInt(row.original.fecha_hora);

        const date = moment(sqlDate).format("D [de] MMMM [del] YYYY [a las] H:mm");

        return (
          <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
            {date}
          </Tooltip>
        );
      },
    },
    {
      Header: "Finalizada",
      accessor: (d) => {
        return d.finalizada ? `SI` : `NO`;
      },
      Cell({ row }) {
        return (
          <Badge colorScheme={row.original.finalizada ? "green" : "red"}>
            {row.original.finalizada ? "SI" : "NO"}
          </Badge>
        );
      },
    },
    {
      Header: "Usuario",
      accessor: "user.nombre",
      Cell({ row }) {
        return (
          <Stack alignItems="center" direction="row" spacing={4}>
            <Avatar name={row.original.user.nombre} />
            <chakra.span>{row.original.user.nombre}</chakra.span>
          </Stack>
        );
      },
    },
    {
      Header: "Materiales",
      accessor: (data) => {
        let output = [];

        data.material.map((material, index) => {
          output.push(material.nombre);
        });

        return output.join(", ");
      },
      Cell({ row }) {
        let output = [];

        row.original.material.map((material, index) => {
          output.push(material.nombre);
        });

        return output.join(", ");
      },
    },
    {
      header: "",
      id: "click-me-button",
      Cell({ row }) {
        const [dateEnd, setDateEnd] = useState(end.toDate());

        return row.original.finalizada ? null : (
          <Stack direction="row">
            <Popover isLazy closeOnBlur={false} placement="auto">
              {({ isOpen, onClose }) => (
                <>
                  <PopoverTrigger>
                    <Button colorScheme="green" fontSize="2" fontWeight="normal">
                      Aceptar
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">Aceptar reserva</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <FormLabel fontSize="2">Fecha de vencimiento</FormLabel>
                      <DateTimePicker
                        minDate={now.toDate()}
                        value={dateEnd}
                        onChange={(e) => {
                          setDateEnd(e);
                        }}
                      />
                    </PopoverBody>
                    <PopoverFooter d="flex" justifyContent="flex-end">
                      <ButtonGroup size="sm">
                        <Button variant="outline" onClick={onClose}>
                          Cancelar
                        </Button>
                        <Button
                          colorScheme="green"
                          isLoading={createLendLoading || updateReservationLoading}
                          onClick={() => {
                            createLend({
                              variables: {
                                data: {
                                  id_lend: 0,
                                  fecha_hora_presta: "",
                                  fecha_vencimiento: dateEnd,
                                  fecha_devolucion: "",
                                  reservation: {
                                    id_reserva: parseFloat(row.original.id_reserva),
                                  },
                                },
                              },
                              update: (cache) => {
                                cache.evict({ fieldName: "lend" });
                              },
                            });
                            updateReservation({
                              variables: {
                                idReserva: parseFloat(row.original.id_reserva),
                                data: {
                                  finalizada: true,
                                },
                              },
                              update: (cache) => {
                                cache.evict({ fieldName: "getReservations" });
                                onClose();
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
                          Aceptar
                        </Button>
                      </ButtonGroup>
                    </PopoverFooter>
                  </PopoverContent>
                </>
              )}
            </Popover>
            <Popover isLazy placement="auto">
              {({ isOpen, onClose }) => (
                <>
                  <PopoverTrigger>
                    <Button colorScheme="red" fontSize="2" fontWeight="normal">
                      Rechazar
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      ¿Quieres rechazar la reserva #{row.original.id_reserva}?
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      Ten en cuenta que esta opcion es <Badge colorScheme="red">IRREVERSIBLE</Badge>
                    </PopoverBody>
                    <PopoverFooter d="flex" justifyContent="flex-end">
                      <ButtonGroup size="sm">
                        <Button
                          isLoading={deleteReservationLoading}
                          variant="outline"
                          onClick={onClose}
                        >
                          Cancelar
                        </Button>
                        <Button
                          colorScheme="red"
                          isLoading={deleteReservationLoading}
                          onClick={() => {
                            deleteReservation({
                              variables: {
                                idReserva: parseFloat(row.original.id_reserva),
                              },
                              update: (cache) => {
                                cache.evict({
                                  id_reserva: "Reservation:" + parseFloat(row.original.id_material),
                                });
                                onClose();
                                toast({
                                  title: `Reserva rechazada con exito`,
                                  description: "Lo has hecho correctamente c:",
                                  status: "success",
                                  duration: 2000,
                                  isClosable: true,
                                });
                              },
                            });
                          }}
                        >
                          Rechazar
                        </Button>
                      </ButtonGroup>
                    </PopoverFooter>
                  </PopoverContent>
                </>
              )}
            </Popover>
          </Stack>
        );
      },
    },
  ];

  return (
    <>
      {data && data.getReservations.length == 0 ? (
        <Stack align="center" justify="center">
          <Stack ref={container} h="200px" w="200px" />
          <Text color="lendlab.gray.400">Actualmente no hay reservas. Crea nuevos ya!</Text>
        </Stack>
      ) : (
        <Table columns={COLUMNS} data={reservationsGrouped} />
      )}
    </>
  );
};
