import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

import { CREATE_COURSE, UPDATE_COURSE } from "./graphql-mutations";
import { GET_COURSE, GET_COURSES_BY_INSTITUTION } from "./graphql-queries";

export const useCoursesByInstitution = (id_institution) => {
  const result = useQuery(GET_COURSES_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
};

export const useCreateCourse = () => {
  const toast = useToast();

  const [createCourse, result] = useMutation(CREATE_COURSE, {
    onCompleted: ({ createNewCourse }) => {
      toast({
        title: "Curso creado con éxito",
        description: "Token del curso: " + createNewCourse.course_token,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [createCourse, result];
};

export const useCourse = (courseToken) => {
  const result = useQuery(GET_COURSE, {
    variables: { courseToken },
  });

  return result;
};

export const useUpdateCourse = () => {
  const toast = useToast();

  const [updateCourse, result] = useMutation(UPDATE_COURSE, {
    onCompleted: () =>
      toast({
        title: "Curso actualizado con éxito",
        description: "El curso se ha actualizado con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [updateCourse, result];
};