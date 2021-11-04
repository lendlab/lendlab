import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Field } from "@components/Field";
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";

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
            <Field
              control="input"
              label="Cedula de Usuario"
              name="cedula"
              placeholder="ej. 54548246"
              type="number"
            />
            <Field
              control="input"
              label="Nombre"
              name="nombre"
              placeholder="ej. Marcos Cianzio"
              type="text"
            />
            <Field
              control="input"
              label="Contraseña"
              name="password"
              placeholder="ej. ******"
              type="password"
            />
            <Field
              control="input"
              label="Dirección"
              name="direccion"
              placeholder="ej. Sanchez 294"
              type="text"
            />
            <Field
              control="input"
              label="Foto del Usuario"
              name="foto_usuario"
              placeholder="pone la fotito"
              type="text"
            />
            <Field
              control="input"
              label="telefono"
              name="telefono"
              placeholder="ej. 45325140"
              type="number"
            />
            <Field
              control="input"
              label="Tipo de Usuario"
              name="tipo_usuario"
              placeholder="ej. Alumno"
              type="text"
            />
            <Field
              control="input"
              label="Fecha de nacimiento"
              name="fecha_nacimiento"
              type="date"
            />
            <Field
              control="input"
              label="ID Institucion"
              name="institution.id_institution"
              type="number"
            />
            <Field control="input" label="ID Curso" name="course.course_id" type="number" />
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
