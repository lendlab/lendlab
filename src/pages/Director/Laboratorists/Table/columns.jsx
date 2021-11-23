import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Stack } from "@chakra-ui/layout";
import { useDeleteUser } from "@graphql/users/custom-hooks";
import { momentizeDate } from "@utils/momentizeDate";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router";

export const COLUMNS = [
  {
    Header: "Cedula",
    accessor: "cedula",
  },
  {
    Header: "Nombre",
    accessor: "nombre",
  },
  {
    Header: "Direccion",
    accessor: "direccion",
  },
  {
    Header: "Telefono",
    accessor: "telefono",
  },
  {
    Header: "Tipo de Usuario",
    accessor: "tipo_usuario",
    Cell({ row }) {
      return <Badge variant="solid">{row.original.tipo_usuario}</Badge>;
    },
  },
  {
    Header: "Fecha de Nacimiento",
    accessor: "fecha_nacimiento",
    Cell({ row }) {
      const { slashedFormattedDate } = momentizeDate(
        row.original.fecha_nacimiento
      );

      return slashedFormattedDate;
    },
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const [deleteUser, { loading, data }] = useDeleteUser();

      const history = useHistory();

      return (
        <Stack direction="row">
          <IconButton
            aria-label="Borrar Material"
            icon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
            isLoading={loading}
            variant="ghost"
            onClick={() => {
              deleteUser({
                variables: {
                  cedula: row.original.cedula,
                },
                update: (cache) => {
                  cache.evict({
                    id_material: "User:" + row.original.cedula,
                  });
                },
              });
            }}
          />
          <IconButton
            aria-label="Editar Material"
            color="lendlab.light.red.400"
            icon={<Icon as={FiEdit2} color="lendlab.yellow" />}
            variant="ghost"
            onClick={() =>
              history.push("/director/laboratoristas/" + row.original.cedula)
            }
          />
        </Stack>
      );
    },
  },
];
