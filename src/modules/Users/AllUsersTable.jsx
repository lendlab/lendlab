import React from "react";
import { Table } from "@ui";

import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const AllUsersTable = () => {
  return <Table columns={COLUMNS} data={MOCK_DATA} placeholder="Buscar Usuarios" />;
};

export default AllUsersTable;
