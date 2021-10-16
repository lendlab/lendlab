import { Badge, Box, Stack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
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
      return `${moment(parseInt(d.fecha_hora_presta)).format(
        "D [de] MMMM [del] YYYY [a las] H:mm"
      )} || ${moment(parseInt(d.fecha_hora_presta)).format("D[/]M[/]YY")}`;
    },
    Cell({ row }) {
      const sqlDate = parseInt(row.original.fecha_hora_presta);

      const date = moment(sqlDate).format("D [de] MMMM [del] YYYY [a las] H:mm");

      return (
        <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
          {date}
        </Tooltip>
      );
    },
  },
  {
    Header: "Plazo",
    accessor: (d) => {
      return `hasta el ${moment(parseInt(d.fecha_vencimiento)).format(
        "D [de] MMMM [del] YYYY [a las] H:mm"
      )} || ${moment(parseInt(d.fecha_vencimiento)).format("D[/]M[/]YY")}`;
    },
    Cell({ row }) {
      const sqlDate = parseInt(row.original.fecha_vencimiento);

      const date = moment(sqlDate).format(" [de] MMMM [del] YYYY [a las] H:mm");

      return (
        <>
          {moment(sqlDate) < moment(new Date()) ? (
            <Badge colorScheme="red">
              <Tooltip
                aria-label={moment(new Date()).to(sqlDate)}
                label={moment(new Date()).to(sqlDate)}
              >
                <Box>hasta el {date}</Box>
              </Tooltip>
            </Badge>
          ) : (
            <>
              hasta el{" "}
              <Tooltip
                aria-label={moment(new Date()).to(sqlDate)}
                label={moment(new Date()).to(sqlDate)}
              >
                {date}
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
        return <Badge colorScheme="yellow">NO DEVUELTO</Badge>;
      else if (row.original.fecha_devolucion == null) {
        return (
          <Stack direction="row">
            <Badge colorScheme="yellow">NO DEVUELTO</Badge>
            <Badge colorScheme="red">ATRASADO</Badge>
          </Stack>
        );
      }

      const sqlDate = parseInt(row.original.fecha_devolucion);

      const date = moment(sqlDate).format("D [de] MMMM [del] YYYY [a las] H:mm");

      return (
        <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
          {date}
        </Tooltip>
      );
    },
  },
  {
    Header: "Reserva",
    accessor: "reservation.id_reserva",
  },
];
