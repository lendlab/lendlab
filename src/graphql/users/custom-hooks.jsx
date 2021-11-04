import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

import { CREATE_USER } from "./graphql-mutations";
import { GET_ALL_USERS_AND_MATERIALS, GET_ALL_USERS } from "./graphql-queries";

export const useUsers = () => {
  const result = useQuery(GET_ALL_USERS);

  return result;
};

export const useUsersAndMaterials = () => {
  const result = useQuery(GET_ALL_USERS_AND_MATERIALS);

  return result;
};

export const useRegister = () => {
  const toast = useToast();

  const [register, result] = useMutation(CREATE_USER, {
    onCompleted: ({ register }) =>
      toast({
        title: "Usuario registrado con exito",
        description: "Se ha registrado el usuario " + register.nombre,
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [register, result];
};
