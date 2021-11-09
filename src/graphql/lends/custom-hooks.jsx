import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { CREATE_LEND, DELETE_LEND, UPDATE_LEND } from "./graphql-mutations";
import { GET_ALL_LENDS, GET_LENDS_BY_INSTITUTION, GET_USER_LENDS } from "./graphql-queries";

export const useLends = () => {
  const result = useQuery(GET_ALL_LENDS);

  return result;
};

export const useCreateLend = () => {
  const toast = useToast();

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
        description: "Se ha devuelto correctamente el prestamo ",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [updateLend, result];
};

export const useLendsByInstitution = (id_institution) => {
  const result = useQuery(GET_LENDS_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
};

export const useUserLends = (cedula) => {
  const result = useQuery(GET_USER_LENDS, {
    variables: {
      cedula,
    },
  });

  return result;
};

export const useDeleteLend = () => {
  const [deleteLend, result] = useMutation(DELETE_LEND);

  return [deleteLend, result];
};
