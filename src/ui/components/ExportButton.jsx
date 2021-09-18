import { Button } from "@chakra-ui/button";
import React from "react";
import { ExportIcon } from "@icons";

export const ExportButton = (props) => {
  return (
    <Button leftIcon={<ExportIcon />} variant="secondary" {...props}>
      Exportar
    </Button>
  );
};
