import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

import { CREATE_INSTITUTION, DELETE_INSTITUTION } from "./graphql-mutations";
import { GET_INSTITUTIONS } from "./graphql-queries";

export const useInstitutions = () => {
  const result = useQuery(GET_INSTITUTIONS);

  return result;
};

export const useCreateInstitution = () => {
  const toast = useToast();

  const [createInstitution, result] = useMutation(CREATE_INSTITUTION, {
    onCompleted: ({ newInstitution }) =>
      toast({
        title: "Institución creada con exito",
        description: "Se ha creado la institución " + newInstitution.institution_name,
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [createInstitution, result];
};

export const useDeleteInstitution = () => {
  const toast = useToast();

  const [deleteInstitution, result] = useMutation(DELETE_INSTITUTION, {
    onCompleted: () =>
      toast({
        title: "Institución eliminada con éxito",
        description: "La institución se ha eliminado con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [deleteInstitution, result];
};
