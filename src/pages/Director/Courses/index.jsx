import React from "react";
import Dashboard from "@components/Dashboard";
import CoursesTable from "./Table";

const Courses = () => {
  return (
    <Dashboard link="/director/cursoss/nuevo" title="Cursos">
      <CoursesTable />
    </Dashboard>
  );
};

export default Courses;
