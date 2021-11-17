import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { useMe } from "@graphql/auth/custom-hook";
import Dashboard from "@components/Dashboard";
import { useUser } from "@graphql/users/custom-hooks";

import ConfigFields from "./Fields";

const Config = () => {
  const { loading, data: dataMe } = useMe();
  const [
    updateUser,
    { loading: loadingUser, data },
    { loading: loadingUpdate },
  ] = useUser(dataMe?.me.cedula);

  if (loading || !dataMe) return "loading...";

  return (
    <Dashboard hasNoActions title="Configuración">
      <Formik
        initialValues={{
          cedula: dataMe?.me.cedula,
          nombre: dataMe?.me.nombre,
          direccion: dataMe?.me.direccion,
          foto_usuario: dataMe?.me.foto_usuario,
          telefono: dataMe?.me.telefono,
          tipo_usuario: dataMe?.me.tipo_usuario,
          fecha_nacimiento: dataMe?.me.fecha_nacimiento,
          course: {
            course_token: dataMe?.me.course.course_token,
          },
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateUser({
            variables: {
              data: {
                nombre: values.nombre,
                direccion: values.direccion,
                tipo_usuario: values.tipo_usuario,
                telefono: values.telefono,
                fecha_nacimiento: values.fecha_nacimiento,
                course: {
                  course_token: values.course.course_token,
                },
              },
              cedula: parseInt(values.cedula),
            },
            update: (cache, data) => {
              cache.evict({ cedula: parseInt(cedula), fieldName: "me" });
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
