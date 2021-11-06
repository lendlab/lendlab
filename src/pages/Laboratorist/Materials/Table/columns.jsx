import { ButtonGroup, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge } from "@chakra-ui/layout";
import { useDeleteMaterial } from "@graphql/materials/custom-hooks";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_material",
    Cell({ row }) {
      return <Badge variant="solid">{row.original.id_material}</Badge>;
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
      return <Badge variant="solid">{row.original.categoria}</Badge>;
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
      return <Badge variant="solid">{row.original.estado}</Badge>;
    },
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const [deleteMaterial, { loading, data }] = useDeleteMaterial();

      const history = useHistory();

      return (
        <ButtonGroup spacing="2" variant="ghost">
          <IconButton
            aria-label="Borrar Material"
            icon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
            isLoading={loading}
            onClick={() => {
              deleteMaterial({
                variables: {
                  idMaterial: row.original.id_material,
                },
                update: (cache) => {
                  cache.evict({
                    id_material: "Material:" + row.original.id_material,
                  });
                },
              });
            }}
          />
          <IconButton
            aria-label="Editar Material"
            color="lendlab.light.red.400"
            icon={<Icon as={FiEdit2} color="lendlab.yellow" />}
            onClick={() => history.push("/dashboard/materiales/" + row.original.id_material)}
          />
        </ButtonGroup>
      );
    },
  },
];
