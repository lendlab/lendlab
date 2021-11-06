import { useMutation, useQuery } from "@apollo/client";

import { CREATE_INCIDENT } from "./graphql-mutations";
import { GET_ALL_INCIDENTS } from "./graphql-queries";

export const useIncidents = () => {
  const result = useQuery(GET_ALL_INCIDENTS);

  return result;
};

export const useCreateIncident = () => {
  const toast = useToast();

  const [createIncident, result] = useMutation(CREATE_INCIDENT, {
    onCompleted: ({ newIncident }) =>
      toast({
        title: "Incidente creado con exito",
        description: "Se ha creado el incidente " + newIncident.id_incident,
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [createIncident, result];
};
