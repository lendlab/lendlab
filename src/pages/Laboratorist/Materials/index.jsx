import React from "react";
import Dashboard from "@components/Dashboard";

import MaterialsTable from "./Table";

const Materials = () => {
  return (
    <Dashboard link="/dashboard/materiales/nuevo" title="Materiales">
      <MaterialsTable />
    </Dashboard>
  );
};

export default Materials;
