import React from "react";
import Dashboard from "@components/Dashboard";

import InstitutionsTable from "./Table";

const Institutions = () => {
  return (
    <Dashboard
      link="/admin/instituciones/nueva"
      buttonText="Nueva institucion"
      title="Instituciones"
    >
      <InstitutionsTable />
    </Dashboard>
  );
};

export default Institutions;
