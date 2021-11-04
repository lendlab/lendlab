import React from "react";
import Dashboard from "@components/Dashboard";

import LendsTable from "./Table";

const Lends = () => {
  return (
    <Dashboard link="/dashboard/prestamos/nuevo" title="Prestamos">
      <LendsTable />
    </Dashboard>
  );
};

export default Lends;
