import React from "react";
import Dashboard from "@components/Dashboard";

import CoursesTable from "./Table";

const Courses = () => {
  return (
    <Dashboard link="/director/cursos/nuevo" buttonText="Nuevo curso" title="Cursos">
      <CoursesTable />
    </Dashboard>
  );
};

export default Courses;
