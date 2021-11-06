import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { CREATE_MATERIAL, DELETE_MATERIAL, UPDATE_MATERIAL } from "./graphql-mutations";
import { GET_ALL_MATERIALS, GET_MATERIAL, GET_POPULAR_MATERIALS } from "./graphql-queries";

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

export const useDeleteMaterial = () => {
  const toast = useToast();

  const [deleteMaterial, result] = useMutation(DELETE_MATERIAL, {
    onCompleted: () =>
      toast({
        title: "Material eliminado con exito",
        description: "Se ha eliminado correctamente el material",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [deleteMaterial, result];
};

export const useMaterial = (id) => {
  const result = useQuery(GET_MATERIAL, { variables: { idMaterial: parseInt(id) } });

  return result;
};

export const useUpdateMaterial = () => {
  const toast = useToast();

  const [updateMaterial] = useMutation(UPDATE_MATERIAL, {
    onCompleted: ({ updateMaterial }) => {
      toast({
        title: "Material modificado con éxito",
        description: "Se ha modificado correctamente el material " + updateMaterial.nombre,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return updateMaterial;
};

export const usePopularMaterials = () => {
  const result = useQuery(GET_POPULAR_MATERIALS);

  return result;
};
