import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Field } from "@components/Field";
import { useMe } from "@graphql/auth/custom-hook";
import { useCreateCourse } from "@graphql/courses/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";

const NewCourse = () => {
  const { data: dataMe } = useMe();

  const [createCourse, { loading, data, error }] = useCreateCourse();

  return (
    <Dashboard hasNoActions title="Nuevo Curso">
      <Formik
        initialValues={{
          course_token: "",
          course_name: "",
          institution: {
            id_institution: dataMe?.me.course.institution.id_institution,
          },
        }}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          return createCourse({
            variables: { data: { ...values } },
            update: (cache) => {
              cache.evict({ fieldName: "getCoursessByInstitution" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <Field label="Nombre del curso" name="course_name" placeholder="ej. 3GB" />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Creando Curso..."
              type="submit"
              variant="primary"
            >
              Crear nuevo curso
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewCourse;
