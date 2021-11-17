import React from "react";
import Dashboard from "@components/Dashboard";
import { LendList } from "./LendList";

const MyLends = () => {
  return (
    <Dashboard hasNoActions title="Mis prestamos">
      <LendList />
    </Dashboard>
  );
};

export default MyLends;
