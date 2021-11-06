import React from "react";
import Dashboard from "@components/Dashboard";

import IncidentsTable from "./Table";

const Incidents = () => {
  return (
    <Dashboard link="/dashboard/incidentes/nuevo" title="Incidentes">
      <IncidentsTable />
    </Dashboard>
  );
};

export default Incidents;
