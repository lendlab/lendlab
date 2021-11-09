import React from "react";
import Dashboard from "@components/Dashboard";
import { useMe } from "@graphql/auth/custom-hook";
import { useUserLends } from "@graphql/lends/custom-hooks";
import { Code } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";

const MyLends = () => {
  const { data: dataMe } = useMe();

  const { loading, data, error } = useUserLends(dataMe?.me.cedula);

  if (loading || !data) return <Spinner />;

  return (
    <Dashboard hasNoActions title="Mis prestamos">
      <Code>{JSON.stringify(data.getUserLends)}</Code>
    </Dashboard>
  );
};

export default MyLends;
