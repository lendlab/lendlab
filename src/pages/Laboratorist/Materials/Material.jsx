import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { useUpdateMaterial } from "@graphql/materials/custom-hooks";
import { useMaterial } from "@graphql/materials/custom-hooks";

import MaterialsFields from "./Fields";

const Material = () => {
  const { id } = useParams();

  const updateMaterial = useUpdateMaterial();
  const { loading, data, error } = useMaterial(id);

  if (loading) return "loading..";

  return (
    <Dashboard hasNoActions title={"Material #" + data?.getMaterial.id_material}>
      <Formik
        initialValues={{
          nombre: data?.getMaterial.nombre,
          etiqueta: data?.getMaterial.etiqueta,
          categoria: data?.getMaterial.categoria,
          descripcion: data?.getMaterial.descripcion,
          cantidad: data?.getMaterial.cantidad,
          estado: data?.getMaterial.estado,
        }}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          return updateMaterial({
            variables: {
              data: values,
              idMaterial: parseInt(id),
            },
            update: (cache, data) => {
              cache.evict({ id_material: parseInt(id), fieldName: "getMaterial" });
              cache.evict({ id_material: parseInt(id), fieldName: "getMaterials" });
              cache.evict({ fieldName: "getReservations" });

              resetForm({ values: data });
            },
          });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Stack as={Form} spacing={6}>
            <MaterialsFields noInstitution />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={isSubmitting}
              loadingText="Actualizando Material..."
              type="submit"
              variant="primary"
            >
              Actualizar Material
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default Material;
