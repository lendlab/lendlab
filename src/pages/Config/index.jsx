import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { useMe } from "@graphql/auth/custom-hook";
import Dashboard from "@components/Dashboard";

import ConfigFields from "./Fields";

const Config = () => {
  const { loading, data } = useMe();

  if (loading || !data) return "loading...";

  return (
    <Dashboard hasNoActions isUserConfig title="Configuración">
      <Formik
        initialValues={{
          cedula: data?.me.cedula,
          nombre: data?.me.nombre,
          password: "",
          direccion: data?.me.direccion,
          foto_usuario: data?.me.foto_usuario,
          telefono: data?.me.telefono,
          tipo_usuario: data?.me.tipo_usuario,
          fecha_nacimiento: data?.me.fecha_nacimiento,
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateUser({
            variables: {
              data: values,
              cedula: parseInt(cedula),
            },
            update: (cache, data) => {
              cache.evict({ cedula: parseInt(data?.me.cedula), fieldName: "getUser" });
              cache.evict({ cedula: parseInt(data?.me.cedula), fieldName: "getUsers" });
              cache.evict({ cedula: parseInt(data?.me.cedula), fieldName: "me" });
              cache.evict({ fieldName: "getReservations" });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <ConfigFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={isSubmitting}
              loadingText="Actualizando tu usuario..."
              type="submit"
              variant="primary"
            >
              Actualizar tu usuario
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Config;
