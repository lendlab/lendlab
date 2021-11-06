import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useCreateInstitution } from "@graphql/institutions/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";

import InstitutionFields from "./Fields";

const NewInstitution = () => {
  const [createInstitution, { loading, data, error }] = useCreateInstitution();

  return (
    <Dashboard hasNoActions title="Nueva Institución">
      <Formik
        initialValues={{
          institution_name: "",
          city: "",
          type: "",
          phone: "",
        }}
        validateOnChange={false}
        onSubmit={(values, { resetForm }) => {
          return createInstitution({
            variables: { data: { ...values } },
            update: (cache) => {
              cache.evict({ fieldName: "getInstitutions" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <InstitutionFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Creando Institución..."
              type="submit"
              variant="primary"
            >
              Crear nueva institución
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewInstitution;
