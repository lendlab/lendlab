import React from "react";
import Dashboard from "@components/Dashboard";
import { useUserReservations } from "@graphql/reservations/custom-hooks";
import { Code } from "@chakra-ui/layout";
import { useMe } from "@graphql/auth/custom-hook";
import { Spinner } from "@chakra-ui/react";

const MyReservations = () => {
  const { data: dataMe } = useMe();

  const { loading, data, error } = useUserReservations(dataMe?.me.cedula);

  if (loading || !data) return <Spinner />;

  return (
    <Dashboard hasNoActions title="Mis reservas">
      <Code>{JSON.stringify(data.getUserReservations)}</Code>
    </Dashboard>
  );
};

export default MyReservations;
