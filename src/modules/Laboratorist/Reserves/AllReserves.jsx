import empty from "@animations/empty.json";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Badge, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { GET_ALL_RESERVATIONS } from "@graphql/queries/reservations";
import { SkeletonTable, Table, Text } from "@ui";
import Lottie from "lottie-web";
import moment from "moment";
import { CREATE_LEND } from "@graphql/mutations/lends";
import React, { useEffect, useRef } from "react";

export const AllReserves = () => {
  const { loading, error, data } = useQuery(GET_ALL_RESERVATIONS);
  const [createLend, { data: createLendData, loading: createLendLoading, error: createLendError }] =
    useMutation(CREATE_LEND);
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
    {
      header: "",
      id: "click-me-button",
      Cell({ row }) {
        return row.original.finalizada ? null : (
          <Stack direction="row">
            <Button borderRadius="17" colorScheme="green" fontSize="2" fontWeight="400">
              Aceptar
            </Button>
            <Button borderRadius="17" colorScheme="red" fontSize="2" fontWeight="400">
              Rechazar
            </Button>
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
