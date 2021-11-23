import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import Dashboard from "@components/Dashboard";
import { useUser } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { EditLoading } from "../../../components/EditLoading";

import UserFields from "./Fields";

const Laboratorist = () => {
  const { cedula } = useParams();

  const [
    updateUser,
    { loading: loadingUser, data },
    { loading: loadingUpdate },
  ] = useUser(cedula);

  if (loadingUser || !data) return <EditLoading />;

  return (
    <Dashboard hasNoActions title={"Laboratorista #" + data?.getUser.cedula}>
      <Formik
        initialValues={{
          cedula: data?.getUser.cedula,
          nombre: data?.getUser.nombre,
          direccion: data?.getUser.direccion,
          foto_usuario: data?.getUser.foto_usuario,
          telefono: data?.getUser.telefono,
          tipo_usuario: data?.getUser.tipo_usuario,
          fecha_nacimiento: data?.getUser.fecha_nacimiento,
          course: {
            course_token: data?.getUser.course.course_token,
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
                tipo_usuario: values.tipo_usuario,
                fecha_nacimiento: values.fecha_nacimiento,
                course: {
                  course_token: values.course.course_token,
                },
              },
              cedula: parseInt(cedula),
            },
            update: (cache, data) => {
              cache.evict({
                cedula: parseInt(cedula),
                fieldName: "getLaboratoristsByInstitution",
              });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <UserFields isUpdate />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loadingUpdate}
              loadingText="Actualizando Laboratorista..."
              type="submit"
              variant="primary"
            >
              Actualizar Laboratorista
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Laboratorist;
