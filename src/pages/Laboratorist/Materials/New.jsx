import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useCreateMaterial } from "@graphql/materials/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { useMe } from "@graphql/auth/custom-hook";

import MaterialsFields from "./Fields";

const NewMaterial = () => {
  const { data: dataMe } = useMe();

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
          estado: "",
          institution: {
            id_institution: dataMe?.me.course.institution.id_institution,
          },
        }}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          return createMaterial({
            variables: { data: { ...values } },
            update: (cache) => {
              cache.evict({ fieldName: "getMaterialsByInstitution" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <MaterialsFields />
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
