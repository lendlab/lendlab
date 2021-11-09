import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Box, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { useUpdateLend } from "@graphql/lends/custom-hooks";
import { momentizeDate } from "@utils/momentizeDate";
import moment from "moment/min/moment-with-locales";
import React from "react";
import { FiCheckCircle, FiTrash } from "react-icons/fi";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_lend",
  },
  {
    Header: "Fecha y hora",
    accessor: (d) => {
      const { completeFormattedDate, slashedFormattedDate } = momentizeDate(d.fecha_hora_presta);

      return `${completeFormattedDate} || ${slashedFormattedDate}`;
    },
    Cell({ row }) {
      const { fromNow, completeFormattedDate } = momentizeDate(row.original.fecha_hora_presta);

      return (
        <Tooltip aria-label={fromNow} label={fromNow}>
          {completeFormattedDate}
        </Tooltip>
      );
    },
  },
  {
    Header: "Plazo",
    accessor: (d) => {
      const { completeFormattedDate, slashedFormattedDate } = momentizeDate(d.fecha_vencimiento);

      return `${completeFormattedDate} || ${slashedFormattedDate}`;
    },
    Cell({ row }) {
      const { sqlDate, completeFormattedDate, toNow, fromNow } = momentizeDate(
        row.original.fecha_vencimiento
      );

      return (
        <>
          {moment(sqlDate) < moment(new Date()) ? (
            <Badge colorScheme="red" variant="solid">
              <Tooltip aria-label={fromNow} label={fromNow}>
                <Box>hasta el {completeFormattedDate}</Box>
              </Tooltip>
            </Badge>
          ) : (
            <>
              hasta el{" "}
              <Tooltip aria-label={toNow} label={toNow}>
                {completeFormattedDate}
              </Tooltip>
            </>
          )}
        </>
      );
    },
  },
  {
    Header: "Devolucion",
    accessor: (d) => {
      if (
        d.fecha_devolucion == null &&
        moment(parseInt(d.fecha_vencimiento)) > moment(new Date())
      ) {
        return `NO DEVUELTO || ATRASADO`;
      } else if (d.fecha_devolucion == null) return `NO DEVUELTO`;
      else {
        return `${moment(parseInt(d.fecha_devolucion)).format(
          "D [de] MMMM [del] YYYY [a las] H:mm"
        )}`;
      }
    },
    Cell({ row }) {
      if (
        row.original.fecha_devolucion == null &&
        moment(parseInt(row.original.fecha_vencimiento)) > moment(new Date())
      )
        return (
          <Stack direction="row">
            <Badge colorScheme="yellow" variant="solid">
              NO DEVUELTO
            </Badge>
            <Badge colorScheme="red" variant="solid">
              ATRASADO
            </Badge>
          </Stack>
        );
      else if (row.original.fecha_devolucion == null) {
        return (
          <Badge colorScheme="yellow" variant="solid">
            NO DEVUELTO
          </Badge>
        );
      }

      const { fromNow, completeFormattedDate } = momentizeDate(row.original.fecha_devolucion);

      return (
        <Tooltip aria-label={fromNow} label={fromNow}>
          {completeFormattedDate}
        </Tooltip>
      );
    },
  },
  {
    Header: "Reserva",
    accessor: "reservation.id_reserva",
  },
  {
    Header: "Material",
    accessor: "reservation.material.nombre",
  },
  {
    Header: "Laboratorista",
    accessor: "laboratorist.nombre || laboratorist.cedula",
    Cell({ row }) {
      return (
        <Stack alignItems="center" direction="row" spacing={4}>
          <Avatar alt={row.original.laboratorist.nombre} name={row.original.laboratorist.nombre} />
          <Tooltip
            aria-label={`Cedula: ${row.original.laboratorist.cedula}`}
            label={`Cedula: ${row.original.laboratorist.cedula}`}
          >
            <chakra.span>{row.original.laboratorist.nombre}</chakra.span>
          </Tooltip>
        </Stack>
      );
    },
  },
  {
    Header: "Alumno",
    accessor: "reservation.user.nombre || reservation.user.cedula",
    Cell({ row }) {
      return (
        <Stack alignItems="center" direction="row" spacing={4}>
          <Avatar
            alt={row.original.reservation.user.nombre}
            name={row.original.reservation.user.nombre}
          />
          <Tooltip
            aria-label={`Cedula: ${row.original.reservation.user.cedula}`}
            label={`Cedula: ${row.original.reservation.user.cedula}`}
          >
            <chakra.span>{row.original.reservation.user.nombre}</chakra.span>
          </Tooltip>
        </Stack>
      );
    },
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const [updateLend, { loading }] = useUpdateLend();

      return (
        <>
          {!row.original.fecha_devolucion ? (
            <Stack direction="row">
              <Button
                aria-label="Aceptar Reserva"
                color="lendlab.blue.300"
                isLoading={loading}
                leftIcon={<Icon as={FiCheckCircle} color="lendlab.blue.300" />}
                variant="ghost"
                onClick={async () => {
                  return updateLend({
                    variables: {
                      data: {
                        fecha_devolucion: moment(new Date(), "YYYY-MM-DD HH:mm:ss").format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                      },
                      idLend: parseInt(row.original.id_lend),
                      fechaHoraPresta: moment(
                        row.original.fecha_hora_presta,
                        "YYYY-MM-DD HH:mm:ss"
                      ).format("YYYY-MM-DD HH:mm:ss"),
                    },
                    update: (cache) => {
                      cache.evict({
                        id_lend: "Lend:" + row.original.id_lend,
                      });
                    },
                  });
                }}
              >
                Devolver
              </Button>
              <Button
                aria-label="Rechazar Reserva"
                color="lendlab.light.red.400"
                leftIcon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
                variant="ghost"
                // onClick={() => {
                //   deleteReservation({
                //     variables: {
                //       idReserva: parseInt(row.original.id_reserva),
                //     },
                //     update: (cache) => {
                //       cache.evict({
                //         id_reserva: "Reservation:" + row.original.id_reserva,
                //       });
                //     },
                //   });
                // }}
              />
            </Stack>
          ) : null}
        </>
      );
    },
  },
];
