import React from "react";
import Dashboard from "@components/Dashboard";

import { GET_INSTITUTIONS } from "../../../graphql/institutions/graphql-queries";

import InstitutionsTable from "./Table";

const Institutions = () => {
  return (
    <Dashboard link="/admin/instituciones/nueva" query={GET_INSTITUTIONS} title="Instituciones">
      <InstitutionsTable />
    </Dashboard>
  );
};

export default Institutions;
