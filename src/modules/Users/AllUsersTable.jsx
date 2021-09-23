import React from "react";
import { Table } from "@ui";

import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const AllUsersTable = () => {
  return <Table mock_columns={COLUMNS} mock_data={MOCK_DATA} placeholder="Buscar Usuarios" />;
};

export default AllUsersTable;
