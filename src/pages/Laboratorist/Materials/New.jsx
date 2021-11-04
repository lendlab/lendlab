import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Field } from "@components/Field";
import { useCreateMaterial } from "@graphql/materials/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";

const NewMaterial = () => {
  const [createMaterial, { loading, data, error }] = useCreateMaterial();

  return (
    <Dashboard hasNoActions title="Nuevo Material">
      <Formik
        initialValues={{
          nombre: "",
          etiqueta: "",
          categoria: "",
          descripcion: "",
          cantidad: "",
          foto: "",
          estado: "",
          institution: {
            id_institution: "",
          },
        }}
        onSubmit={(values, { resetForm }) => {
          return createMaterial({
            variables: { data: { ...values } },
            update: (cache) => {
              cache.evict({ fieldName: "getMaterials" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <Field
              label="Nombre del Material"
              name="nombre"
              placeholder="ej. Ceibalita"
              type="text"
            />
            <Field label="Etiqueta" name="etiqueta" placeholder="ej. 12" type="text" />
            <Field label="Categoría" name="categoria" placeholder="ej. Laptops" type="text" />
            <Field label="Descripcion" name="descripcion" placeholder="descripcion" type="text" />
            <Field label="Cantidad" name="cantidad" placeholder="ej.10" type="number" />
            <Field label="Foto del Material" name="foto" placeholder="Foto" type="text" />
            <Field label="Estado del material" name="estado" placeholder="ej. Roto" type="text" />
            <Field
              label="Id Institucion"
              name="institution.id_institution"
              placeholder="ej. 1"
              type="number"
            />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Creando Material..."
              type="submit"
              variant="primary"
            >
              Crear nuevo material
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewMaterial;
