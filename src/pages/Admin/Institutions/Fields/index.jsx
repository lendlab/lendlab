import React from "react";
import { Field } from "@components/Field";

const InstitutionFields = () => {
  return (
    <>
      <Field
        label="Nombre de la institucion"
        name="institution_name"
        placeholder="ej. UTU Blanes Viale"
        type="text"
      />
      <Field label="Ciudad" name="city" placeholder="ej. Mercedes" type="text" />
      <Field label="Tipo de Institución" name="type" placeholder="ej. Secundaria" type="text" />
      <Field label="Teléfono" name="phone" placeholder="ej. 45354" type="number" />
    </>
  );
};

export default InstitutionFields;
