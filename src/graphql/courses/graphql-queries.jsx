import { gql } from "@apollo/client";

export const GET_COURSES_BY_INSTITUTION = gql`
  query GetCoursessByInstitution($idInstitution: Int!) {
    getCoursessByInstitution(id_institution: $idInstitution) {
      course_token
      course_name
      institution {
        id_institution
        institution_name
        city
        type
        phone
      }
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($courseToken: String!) {
    getCourse(course_token: $courseToken) {
      course_token
      course_name
    }
  }
`;
