import { gql } from "@apollo/client";

export const CREATE_INCIDENT = gql`
  mutation Id_incidentMutation($data: IncidentInput!) {
    newIncident(data: $data) {
      id_incident
      observations
      repairs
      complaint
      solved
      date
      material {
        id_material
        nombre
        categoria
        etiqueta
        cantidad
        descripcion
        foto
        estado
        institution {
          institution_name
          id_institution
          type
          city
          phone
        }
      }
    }
  }
`;
