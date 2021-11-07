import React from "react";
import { Field } from "@components/Field";

const ConfigFields = () => {
  return (
    <>
      <Field
        control="input"
        label="Tu cedula"
        name="cedula"
        placeholder="ej. 54548246"
        type="number"
      />
      <Field
        control="input"
        label="Tu nombre"
        name="nombre"
        placeholder="ej. Marcos Cianzio"
        type="text"
      />
      <Field
        control="input"
        label="Tu contraseña"
        name="password"
        placeholder="ej. ******"
        type="password"
      />
      <Field
        control="input"
        label="Tu dirección"
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
        label="Tu teléfono"
        name="telefono"
        placeholder="ej. 45325140"
        type="number"
      />
      <Field
        disabled
        control="input"
        label="Tipo de Usuario"
        name="tipo_usuario"
        placeholder="ej. Alumno"
        type="text"
      />
      <Field control="input" label="Tu fecha de nacimiento" name="fecha_nacimiento" type="date" />
    </>
  );
};

export default ConfigFields;
