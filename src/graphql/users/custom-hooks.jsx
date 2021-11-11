import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./graphql-mutations";
import {
  GET_ALL_USERS,
  GET_LABORATORISTS_BY_INSTITUTION,
  GET_STUDENTS_BY_INSTITUTION,
  GET_USER,
} from "./graphql-queries";

export const useUsers = () => {
  const result = useQuery(GET_ALL_USERS);

  return result;
};

export const useRegister = () => {

  const [register, result] = useMutation(CREATE_USER);

  return [register, result];
};

export const useDeleteUser = () => {
  const toast = useToast();

  const [deleteUser, result] = useMutation(DELETE_USER, {
    onCompleted: () =>
      toast({
        title: "Usuario eliminado con éxito",
        description: "Se ha eliminado el usuario con éxito",
        status: "success",
        duration: 2000,
        isClosable: true,
      }),
  });

  return [deleteUser, result];
};

export const useUser = (cedula) => {
  const toast = useToast();

  const result = useQuery(GET_USER, {
    variables: { cedula: parseInt(cedula) },
  });

  const [updateUser, resultUpdate] = useMutation(UPDATE_USER, {
    onCompleted: ({ updateUser }) => {
      toast({
        title: "Usuario modificado con éxito",
        description: "Se ha modificado correctamente el usuario " + updateUser.nombre,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [updateUser, result, resultUpdate];
};

export const useStudentsByInstitution = (id_institution) => {
  const result = useQuery(GET_STUDENTS_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
};

export const useLaboratoristsByInstitution = (id_institution) => {
  const result = useQuery(GET_LABORATORISTS_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
};
