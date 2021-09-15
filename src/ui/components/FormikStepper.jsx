import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Arrow, LoginIcon, Arrow2 } from "@icons";

export const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off" style={{ width: "50%" }}>
          <Stack spacing="4">
            {currentChild}

            <Button
              isLoading={isSubmitting}
              loadingText="Iniciando sesión"
              rightIcon={isLastStep() ? <LoginIcon /> : <Arrow2 fill="white" />}
              type="submit"
              variant="primary"
              w="full"
            >
              {isSubmitting ? "Cargando" : isLastStep() ? "Iniciar sesión" : "Continuar"}
            </Button>

            {step > 0 ? (
              <Button
                isLoading={isSubmitting}
                leftIcon={<Arrow fill="#2c3e50" />}
                loadingText="Iniciando sesión"
                type="submit"
                variant="secondary"
                w="full"
                onClick={() => setStep((s) => s - 1)}
              >
                Volver
              </Button>
            ) : null}
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
