import React from "react";
import Dashboard from "@components/Dashboard";
import LaboratoristsTable from "./Table";

const Laboratorists = () => {
  return <Dashboard link="/director/laboratoristas/nuevo" title="Laboratoristas" >
    <LaboratoristsTable />
  </Dashboard>;
};

export default Laboratorists;
