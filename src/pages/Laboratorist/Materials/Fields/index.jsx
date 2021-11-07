import { Field } from "@components/Field";
import React from "react";

const MaterialFields = ({ noInstitution }) => {
  return (
    <>
      <Field label="Nombre del Material" name="nombre" placeholder="ej. Ceibalita" type="text" />
      <Field label="Etiqueta" name="etiqueta" placeholder="ej. 12" type="text" />
      <Field label="Categoría" name="categoria" placeholder="ej. Laptops" type="text" />
      <Field label="Descripcion" name="descripcion" placeholder="descripcion" type="text" />
      <Field label="Cantidad" name="cantidad" placeholder="ej.10" type="number" />
      <Field label="Estado del material" name="estado" placeholder="ej. Roto" type="text" />
      {!noInstitution && (
        <Field
          label="Id Institucion"
          name="institution.id_institution"
          placeholder="ej. 1"
          type="number"
        />
      )}
    </>
  );
};

export default MaterialFields;
