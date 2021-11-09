import { useQuery } from "@apollo/client";
import { CREATE_COURSE } from "./graphql-mutations";
import { GET_COURSES_BY_INSTITUTION } from "./graphql-queries";

export const useCoursesByInstitution = (id_institution) => {
  const result = useQuery(GET_COURSES_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
}

export const useCoursesByInstitution = (id_institution) => {
  const result = useQuery(GET_COURSES_BY_INSTITUTION, {
    variables: {
      idInstitution: id_institution,
    },
  });

  return result;
}

export const useCreateCourse = () => {
    const toast = useToast();

  const [createCourse, result] = useMutation(CREATE_COURSE, {
    onCompleted: ({ ucreateNewCourse }) => {
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
}

