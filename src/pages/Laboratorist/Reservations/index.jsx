import Dashboard from "@components/Dashboard";
import React from "react";

import ReservationsTable from "./Table";

const Reservations = () => {
  return (
    <Dashboard title="Materiales">
      <ReservationsTable />
    </Dashboard>
  );
};

export default Reservations;
