import React from "react";
import Dashboard from "@components/Dashboard";

import { ReservationList } from "./ReservationList";

const MyReservations = () => {
  return (
    <Dashboard hasNoActions title="Mis reservas">
      <ReservationList />
    </Dashboard>
  );
};

export default MyReservations;
