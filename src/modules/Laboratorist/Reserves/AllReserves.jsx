import React from "react";
import { Table } from "@ui";
import { Badge, Stack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { GET_ALL_RESERVATIONS } from "@graphql/queries/reservations";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { Tooltip } from "@chakra-ui/tooltip";
import es from "moment/locale/es";
import { Avatar } from "@chakra-ui/avatar";
import { chakra } from "@chakra-ui/system";
moment.locale("es", es);

export const AllReserves = () => {
  const { loading, error, data } = useQuery(GET_ALL_RESERVATIONS);

  if (loading)
    return (
      <Stack alignItems="center" h="full" justifyContent="center" w="full">
        <Spinner color="blue.500" emptyColor="gray.200" size="xl" speed="0.65s" thickness="4px" />
      </Stack>
    );

  if (error) return <p>Oh no... {error.message}</p>;

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
      accessor: "fecha_hora",
      Cell({ row }) {
        const sqlDate = parseInt(row.original.fecha_hora);

        const date = moment(sqlDate).format("Do [de] MMMM [del] YYYY [a las] H:mm");

        return (
          <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
            {date}
          </Tooltip>
        );
      },
    },
    {
      Header: "Finalizada",
      accessor: "finalizada",
      Cell({ row }) {
        return <Badge>{row.original.finalizada ? "SI" : "NO"}</Badge>;
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
  ];

  return <Table columns={COLUMNS} data={reservationsGrouped} />;
};
