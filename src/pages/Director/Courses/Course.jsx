import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { EditLoading } from "@components/EditLoading";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { useUpdateCourse } from "@graphql/courses/custom-hooks";
import { useCourse } from "@graphql/courses/custom-hooks";
import { Field } from "@components/Field";

const Course = () => {
  const { token } = useParams();

  const [updateCourse] = useUpdateCourse();
  const { loading, data, error } = useCourse(token);

  if (loading) return <EditLoading />;

  return (
    <Dashboard hasNoActions title={"Curso #" + data?.getCourse.course_token}>
      <Formik
        initialValues={{
          course_name: data?.getCourse.course_name,
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateCourse({
            variables: {
              data: values,
              courseToken: token,
            },
            update: (cache, data) => {
              cache.evict({
                course_token: token,
                fieldName: "getCoursessByInstitution",
              });
              cache.evict({
                fieldName: "getCourse",
              });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <Field
              label="Nombre del curso"
              name="course_name"
              placeholder="ej. 3GB"
            />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={isSubmitting}
              loadingText="Actualizando Curso..."
              type="submit"
              variant="primary"
            >
              Actualizar Curso
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Course;
