import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router";

import LendFields from "./Fields";

const Lend = () => {
  const { id } = useParams();

  const [startDate, setStartDate] = useState(new Date());

  if (loading) return "loading";

  return (
    <Dashboard hasNoActions title="Prestamo">
      <Formik
        initialValues={{ user: "", materials: [] }}
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

            <Button isFullWidth disabled={!dirty} type="submit" variant="primary">
              Crear prestamo
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Lend;
