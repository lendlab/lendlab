import React from "react";
import Dashboard from "@components/Dashboard";

import LaboratoristsTable from "./Table";

const Laboratorists = () => {
  return (
    <Dashboard
      link="/director/laboratoristas/nuevo"
      buttonText="Nuevo laboratorista"
      title="Laboratoristas"
    >
      <LaboratoristsTable />
    </Dashboard>
  );
};

export default Laboratorists;
