import { gql } from "@apollo/client";

export const GET_ALL_USERS_AND_MATERIALS = gql`
  query Query($idInstitution: Int!, $getStudentsByInstitutionIdInstitution2: Int!) {
    getStudentsByInstitution(id_institution: $getStudentsByInstitutionIdInstitution2) {
      cedula
      nombre
      direccion
      foto_usuario
      telefono
      tipo_usuario
      fecha_nacimiento
      course {
        course_token
        course_name
        institution {
          id_institution
          institution_name
          city
          type
          phone
        }
      }
    }
    getMaterialsByInstitution(id_institution: $idInstitution) {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      estado
      institution {
        id_institution
        institution_name
        type
        city
        phone
      }
    }
  }
`;
