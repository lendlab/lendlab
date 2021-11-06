import { Badge, Box, Stack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { momentizeDate } from "@utils/momentizeDate";
import moment from "moment/min/moment-with-locales";
import React from "react";

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
      const { sqlDate, completeFormattedDate } = momentizeDate(row.original.fecha_hora_presta);

      return (
        <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
          {completeFormattedDate}
        </Tooltip>
      );
    },
  },
  {
    Header: "Plazo",
    accessor: (d) => {
      const { completeFormattedDate, slashedFormattedDate } = momentizeDate(
        d.fecha_hora_vencimiento
      );

      return `${completeFormattedDate} || ${slashedFormattedDate}`;
    },
    Cell({ row }) {
      const { sqlDate, completeFormattedDate, toNow } = momentizeDate(
        row.original.fecha_hora_vencimiento
      );

      return (
        <>
          {moment(sqlDate) < moment(new Date()) ? (
            <Badge colorScheme="red" variant="solid">
              <Tooltip aria-label={toNow} label={toNow}>
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
        return "NO DEVUELTO";
      } else if (d.fecha_devolucion == null) return `NO DEVUELTO || ATRASADO`;
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
          <Badge colorScheme="yellow" variant="solid">
            NO DEVUELTO
          </Badge>
        );
      else if (row.original.fecha_devolucion == null) {
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
];
