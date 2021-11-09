import { gql } from "@apollo/client";
export const CREATE_COURSE = gql`
  mutation CreateNewCourse($data: NewCourse!) {
    createNewCourse(data: $data) {
      course_token
      course_name
      institution {
        id_institution
      }
    }
  }
`;
