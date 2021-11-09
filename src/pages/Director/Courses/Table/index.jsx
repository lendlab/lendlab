import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useMe } from "@graphql/auth/custom-hook";
import { SUBSCRIBE_TO_USERS } from "@graphql/users/graphql-subscriptions";
import React from "react";
import { useCoursesByInstitution } from "@graphql/courses/custom-hooks";

import { COLUMNS } from "./columns";

const CoursesTable = () => {
  const { data: dataMe } = useMe();

  const { loading, error, data, subscribeToMore } = useCoursesByInstitution(
    dataMe?.me.course.institution.id_institution
  );

  if (loading || !data) {
    return <TableSkeleton theads={["Token", "Nombre", "Institución"]} />;
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={data.getCoursessByInstitution} id="Cursos" />;
};

export default CoursesTable;
