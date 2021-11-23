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

export const UPDATE_COURSE = gql`
  mutation Mutation($courseToken: String!, $data: UpdateCourse!) {
    updateCourse(course_token: $courseToken, data: $data) {
      course_token
      course_name
      institution {
        id_institution
      }
    }
  }
`;
