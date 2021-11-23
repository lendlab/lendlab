import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { EditLoading } from "@components/EditLoading";
import {
  useInstitution,
  useUpdateInstitution,
} from "@graphql/institutions/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import InstitutionFields from "./Fields";

const Institution = () => {
  const { id } = useParams();

  const [updateInstitution] = useUpdateInstitution();
  const { loading, data, error } = useInstitution(id);

  if (loading) return <EditLoading />;

  return (
    <Dashboard
      hasNoActions
      title={"Institución #" + data?.getInstitution.id_institution}
    >
      <Formik
        initialValues={{
          institution_name: data?.getInstitution.institution_name,
          city: data?.getInstitution.city,
          type: data?.getInstitution.type,
          phone: data?.getInstitution.phone,
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateInstitution({
            variables: {
              data: values,
              idInstitution: parseInt(id),
            },
            update: (cache, data) => {
              cache.evict({
                id_institution: parseInt(id),
                fieldName: "getInstitutions",
              });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <InstitutionFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={isSubmitting}
              loadingText="Actualizando Institución..."
              type="submit"
              variant="primary"
            >
              Actualizar institución
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Institution;
