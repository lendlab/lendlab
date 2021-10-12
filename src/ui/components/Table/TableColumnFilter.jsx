import { Input } from "@chakra-ui/input";
import React from "react";

export const TableColumnFilter = React.memo(({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <Input
      size="xs"
      value={filterValue || ""}
      variant="flushed"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
});
