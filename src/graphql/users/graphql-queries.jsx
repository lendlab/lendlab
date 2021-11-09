import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Query {
    getUsers {
      cedula
      nombre
      foto_usuario
      direccion
      telefono
      tipo_usuario
      fecha_nacimiento
      course {
        course_token
        institution {
          id_institution
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query Query($cedula: Int!) {
    getUser(cedula: $cedula) {
      cedula
      nombre
      direccion
      foto_usuario
      course {
        course_token
        institution {
          id_institution
        }
      }
      fecha_nacimiento
      tipo_usuario
      telefono
    }
  }
`;

export const GET_STUDENTS_BY_INSTITUTION = gql`
  query GetStudentsByInstitution($idInstitution: Int!) {
    getStudentsByInstitution(id_institution: $idInstitution) {
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
  }
`;

export const GET_LABORATORISTS_BY_INSTITUTION = gql`
  query GetLaboratoristsByInstitution($idInstitution: Int!) {
    getLaboratoristsByInstitution(id_institution: $idInstitution) {
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
  }
`;
