import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useUsersAndMaterials } from "@graphql/shared/custom-hooks";

import LendFields from "./Fields";
import { EditLoading } from "../../../components/EditLoading";

const Lend = () => {
  const { id } = useParams();

  const [startDate, setStartDate] = useState(new Date());

  const { loading, data } = useUsersAndMaterials();

  if (loading || !data) return <EditLoading />;

  return (
    <Dashboard hasNoActions title="Prestamo">
      <Formik
        initialValues={{
          user: "",
          materials: [],
          fecha_vencimiento: moment(new Date()),
        }}
        validateOnChange={false}
        onSubmit={async (values, { setErrors }) => {}}
      >
        {({ setFieldValue, dirty }) => (
          <Stack as={Form} spacing={6}>
            <LendFields
              materials={data?.getMaterials}
              setFieldValue={setFieldValue}
              setStartDate={setStartDate}
              startDate={startDate}
              users={data?.getUsers}
            />

            <Button
              isFullWidth
              disabled={!dirty}
              type="submit"
              variant="primary"
            >
              Crear prestamo
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Lend;
