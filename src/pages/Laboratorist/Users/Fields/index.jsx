import React from "react";
import { Field } from "@components/Field";

const UserFields = () => {
  return (
    <>
      <Field
        control="input"
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
      <Field
        control="input"
        label="Contraseña"
        name="password"
        placeholder="ej. ******"
        type="password"
      />
      <Field
        control="input"
        label="Dirección"
        name="direccion"
        placeholder="ej. Sanchez 294"
        type="text"
      />
      <Field
        control="input"
        label="Foto del Usuario"
        name="foto_usuario"
        placeholder="pone la fotito"
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
      <Field
        control="input"
        label="ID Institucion"
        name="institution.id_institution"
        type="number"
      />
      <Field control="input" label="Codigo del curso" name="course.course_token" type="text" />
    </>
  );
};

export default UserFields;
