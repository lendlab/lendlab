import React from "react";
import { Field } from "@components/Field";

const UserFields = ({ isUpdate }) => {
  return (
    <>
      <Field
        control="input"
        disabled={isUpdate ? true : false}
        label="Cedula de Usuario"
        name="cedula"
        placeholder="ej. 54548246"
        type="number"
      />
      <Field
        control="input"
        label="Nombre"
        name="nombre"
        placeholder="ej. Marcos Cianzio"
        type="text"
      />
      {!isUpdate && (
        <Field
          control="input"
          label="Contraseña"
          name="password"
          placeholder="ej. ******"
          type="password"
        />
      )}
      <Field
        control="input"
        label="Dirección"
        name="direccion"
        placeholder="ej. Sanchez 294"
        type="text"
      />
      <Field
        control="input"
        label="telefono"
        name="telefono"
        placeholder="ej. 45325140"
        type="number"
      />
      <Field control="input" label="Fecha de nacimiento" name="fecha_nacimiento" type="date" />
      <Field control="input" label="Codigo del curso" name="course_token" type="text" />
    </>
  );
};

export default UserFields;
