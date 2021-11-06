import { gql } from "@apollo/client";

export const GET_STADISTICS = gql`
  query Query {
    getLendsCount
    getMaterialsCount
    getReservationsCount
  }
`;
