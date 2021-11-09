import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { useRejectOrAcceptReservation } from "@graphql/reservations/custom-hooks";
import { momentizeDate } from "@utils/momentizeDate";
import React from "react";
import { FiTrash } from "react-icons/fi";

import AcceptReservationModal from "../../../../components/AcceptReservationModal";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_reserva",
  },
  {
    Header: "Fecha y Hora",
    accessor: (d) => {
      const { completeFormattedDate, slashedFormattedDate } = momentizeDate(d.fecha_hora);

      return `${completeFormattedDate} ||
        ${slashedFormattedDate}
      }`;
    },
    Cell({ row }) {
      const { completeFormattedDate, fromNow } = momentizeDate(row.original.fecha_hora);

      return (
        <Tooltip aria-label={fromNow} label={fromNow}>
          {completeFormattedDate}
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
        <Badge colorScheme={row.original.finalizada ? "green" : "red"} variant="solid">
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
          <Avatar alt={row.original.user.nombre} name={row.original.user.nombre} />
          <Tooltip
            aria-label={`Cedula: ${row.original.user.cedula}`}
            label={`Cedula: ${row.original.user.cedula}`}
          >
            <chakra.span>{row.original.user.nombre}</chakra.span>
          </Tooltip>
        </Stack>
      );
    },
  },
  {
    Header: "Materiales",
    accessor: (data) => {
      let output = [];

      data.material.map((material) => {
        output.push(material.nombre);
      });

      return output.join(", ");
    },
    Cell({ row }) {
      let output = [];

      row.original.material.map((material) => {
        output.push(material.nombre);
      });

      return output.join(", ");
    },
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const [deleteReservation, { loading: loadingDelete }] = useRejectOrAcceptReservation();

      return (
        <>
          {!row.original.finalizada ? (
            <Stack direction="row">
              <Button
                aria-label="Rechazar Reserva"
                color="lendlab.light.red.400"
                isLoading={loadingDelete}
                leftIcon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
                loadingText="Rechazando reserva..."
                variant="ghost"
                onClick={() => {
                  deleteReservation({
                    variables: {
                      idReserva: parseInt(row.original.id_reserva),
                    },
                    update: (cache) => {
                      cache.evict({
                        id_reserva: "Reservation:" + row.original.id_reserva,
                      });
                    },
                  });
                }}
              >
                Rechazar
              </Button>
              <AcceptReservationModal reservation={row.original} />
            </Stack>
          ) : null}
        </>
      );
    },
  },
];
