import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Stack } from "@chakra-ui/layout";
import React from "react";
import { FiTrash, FiEdit2 } from "react-icons/fi";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_material",
    Cell({ row }) {
      return <Badge>{row.original.id_material}</Badge>;
    },
  },
  {
    Header: "Nombre",
    accessor: "nombre",
  },
  {
    Header: "Etiqueta",
    accessor: "etiqueta",
  },
  {
    Header: "Categoria",
    accessor: "categoria",
    Cell({ row }) {
      return <Badge>{row.original.categoria}</Badge>;
    },
  },
  {
    Header: "Descripcion",
    accessor: "descripcion",
  },
  {
    Header: "Cantidad",
    accessor: "cantidad",
  },
  {
    Header: "Foto",
    accessor: "foto",
  },
  {
    Header: "Estado",
    accessor: "estado",
    Cell({ row }) {
      return <Badge>{row.original.estado}</Badge>;
    },
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      return (
        <Stack direction="row">
          <IconButton
            aria-label="Borrar Material"
            icon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
            variant="ghost"
            // onClick={() => {
            //   deleteMaterial({
            //     variables: {
            //       idMaterial: row.original.id_material,
            //     },
            //     update: (cache) => {
            //       cache.evict({
            //         id_material: "Material:" + row.original.id_material,
            //       });
            //     },
            //   });
            // }}
          />
          <IconButton
            color="lendlab.light.red.400"
            icon={<Icon as={FiEdit2} color="lendlab.yellow" />}
            variant="ghost"
          />
        </Stack>
      );
    },
  },
];
