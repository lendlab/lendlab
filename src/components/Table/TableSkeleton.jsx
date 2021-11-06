import React from "react";
import { Box, Skeleton, Table, Tr, Th, Td } from "@chakra-ui/react";

const SkeletonRow = ({ width, theads }) => (
  <Box as="tr">
    {theads.map((_, i) => (
      <Td key={i}>
        <Skeleton height="10px" my={4} w={width} />
      </Td>
    ))}
  </Box>
);

const TableSkeleton = ({ theads }) => {
  return (
    <Box maxW="100%" overflowX="scroll">
      <Table>
        <thead>
          <Tr>
            {theads.map((thead, i) => (
              <Th key={i}>{thead}</Th>
            ))}

            <Th>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          <SkeletonRow theads={theads} width="75px" />
          <SkeletonRow theads={theads} width="125px" />
          <SkeletonRow theads={theads} width="50px" />
          <SkeletonRow theads={theads} width="100px" />
          <SkeletonRow theads={theads} width="75px" />
        </tbody>
      </Table>
    </Box>
  );
};

export default TableSkeleton;
