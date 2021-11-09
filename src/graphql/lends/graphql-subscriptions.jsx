import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_LENDS = gql`
  subscription Subscription {
    newLendSubscription {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
        id_reserva
        fecha_hora
        user {
          cedula
        }
        material {
          id_material
        }
      }
      laboratorist {
        cedula
      }
      institution {
        id_institution
      }
    }
  }
`;
