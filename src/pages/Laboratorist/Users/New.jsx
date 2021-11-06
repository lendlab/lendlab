import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Field } from "@components/Field";
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";

import UserFields from "./Fields";

const NewUser = () => {
  const [register, { loading, error }] = useRegister();

  return (
    <Dashboard hasNoActions title="Nuevo Usuario">
      <Formik
        initialValues={{
          cedula: "",
          nombre: "",
          password: "",
          direccion: "",
          foto_usuario: "",
          telefono: "",
          tipo_usuario: "Alumno",
          fecha_nacimiento: "",
          institution: {
            id_institution: "",
          },
          course: {
            course_id: "",
          },
        }}
        validateOnChange={false}
        onSubmit={(values, { resetForm }) => {
          return register({
            variables: { data: values },
            update: (cache) => {
              cache.evict({ fieldName: "getUsers" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <UserFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Registrando Usuario..."
              type="submit"
              variant="primary"
            >
              Registrar Usuario
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewUser;
