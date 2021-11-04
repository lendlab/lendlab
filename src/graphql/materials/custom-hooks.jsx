import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { CREATE_MATERIAL } from "./graphql-mutations";
import { GET_ALL_MATERIALS } from "./graphql-queries";

export const useMaterials = () => {
  const result = useQuery(GET_ALL_MATERIALS);

  return result;
};

export const useCreateMaterial = () => {
  const toast = useToast();

  const [createMaterial, result] = useMutation(CREATE_MATERIAL, {
    onCompleted: ({ subMaterial }) =>
      toast({
        title: "Material creado con exito",
        description: "Se ha creado el material " + subMaterial.nombre,
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [createMaterial, result];
};
