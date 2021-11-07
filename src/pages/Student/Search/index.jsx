import Dashboard from "@components/Dashboard";
import MaterialSearchItem from "@components/MaterialSearchItem";
import { useMaterialSearch } from "@graphql/materials/custom-hooks";
import React from "react";
import { useParams } from "react-router";

const Search = () => {
  const { material } = useParams();

  const { loading, data } = useMaterialSearch(material);

  if (loading || !data) return "loading...";

  return (
    <Dashboard hasNoActions title={material}>
      {data.getMaterialSearch.map((material) => (
        <MaterialSearchItem key={material.id_material} material={material} />
      ))}
    </Dashboard>
  );
};

export default Search;
