import React from "react";
import { Table } from "@ui";

import MOCK_DATA from "./Table/MOCK_DATA.json";
import { COLUMNS } from "./Table/columns";

export const AllLends = React.memo(() => {
  return <Table columns={COLUMNS} data={MOCK_DATA} placeholder="Buscar Prestamos" />;
});
