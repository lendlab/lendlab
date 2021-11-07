import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { CREATE_LEND, UPDATE_LEND } from "./graphql-mutations";
import { GET_ALL_LENDS } from "./graphql-queries";

export const useLends = () => {
  const result = useQuery(GET_ALL_LENDS, {
    pollInterval: 10000,
  });

  return result;
};

export const useCreateLend = () => {
  const [createLend, result] = useMutation(CREATE_LEND, {
    onCompleted: ({ createLend }) => {
      toast({
        title: "Prestamo creado con éxito",
        description: "Se ha creado correctamente el prestamo #" + createLend.id_lend,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [createLend, result];
};

export const useUpdateLend = () => {
  const toast = useToast();

  const [updateLend, result] = useMutation(UPDATE_LEND, {
    onCompleted: ({ updateLend }) => {
      toast({
        title: "Prestamo devuelto con éxito",
        description: "Se ha devuelto correctamente el prestamo " + updateLend.id_lend,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [updateLend, result];
};
