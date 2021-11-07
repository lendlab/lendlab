import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useUser } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import UserFields from "./Fields";


const User = () => {
  const { cedula } = useParams();

  const [updateUser, {loading: loadingUser, data}, {loading: loadingUpdate}] = useUser(cedula);

  if (loadingUser || !data) return "loading..";

  console.log( data?.getUser[0])

  return (
    <Dashboard hasNoActions title={"Usuario #" + data?.getUser[0].cedula}>
      <Formik
        initialValues={{
          cedula: data?.getUser[0].cedula,
          nombre: data?.getUser[0].nombre,
          password: "",
          direccion: data?.getUser[0].direccion,
          foto_usuario: data?.getUser[0].foto_usuario,
          telefono: data?.getUser[0].telefono,
          tipo_usuario: data?.getUser[0].tipo_usuario,
          fecha_nacimiento: data?.getUser[0].fecha_nacimiento,
          institution: {
            id_institution: data?.getUser[0]
          },
          course: {
            course_token: data?.getUser[0].course.course_token,
          },
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateUser({
            variables: {
              data: values,
              cedula: parseInt(cedula),
            },
            update: (cache, data) => {
              cache.evict({ cedula: parseInt(cedula), fieldName: "getUser" });
              cache.evict({ cedula: parseInt(cedula), fieldName: "getUsers" });
              cache.evict({ fieldName: "getReservations" });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <UserFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loadingUpdate}
              loadingText="Actualizando Usuario..."
              type="submit"
              variant="primary"
            >
              Actualizar User
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default User;
