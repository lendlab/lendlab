import { Stack } from "@chakra-ui/layout";
import MaterialItem from "@components/MaterialItem";
import { usePopularMaterials } from "@graphql/materials/custom-hooks";
import React from "react";

const PopularMaterials = () => {
  const { loading, data, error } = usePopularMaterials();

  if (loading || !data) return "loading..";

  return (
    <Stack direction="row" justify="space-between" spacing={6}>
      {data.getPopularMaterials.map((material, i) => (
        <MaterialItem key={i} material={material} />
      ))}
    </Stack>
  );
};

export default PopularMaterials;
