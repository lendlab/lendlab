import React from "react";
import { Table } from "@ui";

import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const AllLendsTable = React.memo(() => {
  return <Table columns={COLUMNS} data={MOCK_DATA} placeholder="Buscar Prestamos" />;
});

export default AllLendsTable;
