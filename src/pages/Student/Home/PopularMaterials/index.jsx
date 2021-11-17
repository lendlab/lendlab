import { Stack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import MaterialItem from "@components/MaterialItem";
import { usePopularMaterials } from "@graphql/materials/custom-hooks";
import React from "react";

const PopularMaterials = () => {
  const { loading, data, error } = usePopularMaterials();

  if (loading || !data) return <Spinner />;

  return (
    <Stack
      direction={{ md: "row", base: "column" }}
      justify="space-between"
      spacing={6}
      w="full"
    >
      {data.getPopularMaterials.map((material, i) => (
        <MaterialItem key={i} material={material} />
      ))}
    </Stack>
  );
};

export default PopularMaterials;
