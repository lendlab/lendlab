import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useCreateInstitution } from "@graphql/institutions/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

import InstitutionFields from "./Fields";

const NewInstitution = () => {
  const [createInstitution, { loading, data, error }] = useCreateInstitution();

  const validationSchema = yup.object().shape({
    institution_name: yup
      .string()
      .required("Campo requerido")
      .min(4, "Minimo de 4 caracteres")
      .max(50, "Superaste el máximo de 50 caracteres"),
    city: yup
      .string()
      .required("Campo requerido")
      .min(4, "Minimo de 4 caracteres")
      .max(50, "Superaste el máximo de 50 caracteres"),
    type: yup
      .string()
      .required("Campo requerido")
      .min(4, "Minimo de 4 caracteres")
      .max(50, "Superaste el máximo de 50 caracteres"),
    phone: yup
      .string()
      .required("Campo requerido")
      .matches(/^(?<=\s|^)\d+(?=\s|$)/, "Solo números!")
      .min(4, "Minimo de 4 caracteres")
      .max(12, "Superaste el máximo de 12 caracteres"),
  });

  return (
    <Dashboard hasNoActions title="Nueva Institución">
      <Formik
        initialValues={{
          institution_name: "",
          city: "",
          type: "",
          phone: "",
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
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
