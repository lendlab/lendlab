import { gql } from "@apollo/client";

export const RESERVATIONS_SUSCRIPTION = gql`
  subscription Subscription {
    newReservationSubscription {
      id_reserva
      fecha_hora
      finalizada
      user {
        cedula
      }
      material {
        id_material
      }
      institution {
        id_institution
      }
    }
  }
`;
