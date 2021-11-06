import { ButtonGroup, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge } from "@chakra-ui/layout";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router";

import { useDeleteInstitution } from "../../../../graphql/institutions/custom-hooks";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_institution",
    Cell({ row }) {
      return <Badge variant="solid">{row.original.id_institution}</Badge>;
    },
  },
  {
    Header: "Nombre",
    accessor: "institution_name",
  },
  {
    Header: "Ciudad",
    accessor: "city",
  },
  {
    Header: "Tipo",
    accessor: "type",
    Cell({ row }) {
      return <Badge variant="solid">{row.original.type}</Badge>;
    },
  },
  {
    Header: "Teléfono",
    accessor: "phone",
  },

  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const history = useHistory();

      const [deleteInstitution, { loading }] = useDeleteInstitution();

      return (
        <ButtonGroup spacing="2" variant="ghost">
          <IconButton
            aria-label="Borrar Material"
            icon={<Icon as={FiTrash} color="lendlab.light.red.400" />}
            isLoading={loading}
            onClick={() => {
              deleteInstitution({
                variables: {
                  idInstitution: row.original.id_institution,
                },
                update: (cache) => {
                  cache.evict({
                    id_institution: "Institution:" + row.original.id_institution,
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
