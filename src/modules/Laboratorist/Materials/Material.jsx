import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import { InputLeftAddon, InputLeftElement } from "@chakra-ui/input";
import { Badge, Box, Stack } from "@chakra-ui/layout";
import { GET_MATERIAL } from "@graphql/queries/materials";
import { Arrow, Trash, Card, Edit } from "@icons";
import { Heading, Text, FormControl } from "@ui";
import { Form, Formik } from "formik";
import { DELETE_MATERIAL, UPDATE_MATERIAL } from "@graphql/mutations/materials";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useToast } from "@chakra-ui/toast";

export const Material = ({ history }) => {
  const { id } = useParams();

  const [editable, setEditable] = useState(false);

  const { loading, error, data } = useQuery(GET_MATERIAL, {
    variables: { idMaterial: parseInt(id) },
  });

  const toast = useToast();

  const [updateMaterial, { data: editData, loading: editLoading, error: editError }] =
    useMutation(UPDATE_MATERIAL);

  if (loading) return <div>loading...</div>;

  return (
    <Box marginLeft={{ base: 0, md: 60 }}>
      <Box bg="lendlab.gray.100" paddingX={{ base: 0, md: 18 }}>
        {/* {editable && (
          // <Stack
          //   alignItems="center"
          //   bg="white"
          //   bottom="0"
          //   boxShadow="lg"
          //   direction="row"
          //   h="100px"
          //   maxW="inherit"
          //   p={8}
          //   position="fixed"
          //   w="full"
          //   zIndex="1000"
          // >
          //   <Button isFullWidth form="update-material-form" type="submit" variant="primary">
          //     Guardar
          //   </Button>
          // </Stack>
        )} */}
        <Stack h="full" justifyContent="space-between" spacing={8}>
          <Stack spacing={6}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              paddingTop={12}
            >
              <Stack alignItems="center" direction="row" spacing={4}>
                <Button variant="ghost" onClick={() => history.goBack()}>
                  <Arrow direction="left" fill="#000" />
                </Button>

                <Heading fontSize="4xl" textAlign="left">
                  Material #{data.getMaterial[0].id_material}
                </Heading>
              </Stack>
              <Stack direction="row">
                {editable ? (
                  <Stack>
                    <Button form="update-material-form" type="submit" variant="primary">
                      Guardar
                    </Button>
                  </Stack>
                ) : (
                  <Button variant="primary" onClick={() => setEditable(true)}>
                    <Edit fill="#fff" />
                  </Button>
                )}

                <Button variant="secondary">
                  <Trash />
                </Button>
              </Stack>
            </Stack>
            <Text color="lendlab.gray.400" fontSize="16px" noOfLines={[1, 2, 3]} textAlign="left" />
          </Stack>
        </Stack>
      </Box>
      <Box boxShadow="sm" paddingX={{ base: 0, md: 18 }} py={8}>
        <Formik
          initialValues={{
            nombre: data.getMaterial[0].nombre,
            etiqueta: data.getMaterial[0].etiqueta,
            categoria: data.getMaterial[0].categoria,
            descripcion: data.getMaterial[0].descripcion,
            cantidad: data.getMaterial[0].cantidad,
            foto: data.getMaterial[0].foto,
            estado: data.getMaterial[0].estado,
          }}
          onSubmit={(values) => {
            return updateMaterial({
              variables: {
                updateMaterialData: values,
                updateMaterialIdMaterial: parseInt(id),
              },
              update: (cache) => {
                cache.evict({ id_material: parseInt(id), fieldName: "getMaterial" });
                cache.evict({ id_material: parseInt(id), fieldName: "getMaterials" });
                cache.evict({ fieldName: "getReservations" });
                setEditable(false);
                toast({
                  title: `Se ha editado correctamente el material #${id}!`,
                  description: "Lo has hecho correctamente c:",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              },
            });
          }}
        >
          {(props) => (
            <Form id="update-material-form">
              <Stack spacing={4}>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Nombre del material
                  </Heading>
                  {editable ? (
                    <FormControl
                      autoFocus
                      control="input"
                      name="nombre"
                      placeholder="ej. Ceibalita"
                      type="text"
                    />
                  ) : (
                    <Text color="black" fontSize="5" textAlign="left">
                      {data.getMaterial[0].nombre}
                    </Text>
                  )}
                </Stack>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Etiqueta
                  </Heading>
                  {editable ? (
                    <FormControl control="input" name="etiqueta" placeholder="ej. 12" type="text">
                      <InputLeftAddon
                        children="#"
                        bg="lendlab.gray.100"
                        border="none"
                        color="lendlab.gray.300"
                      />
                    </FormControl>
                  ) : (
                    <Text color="black" fontSize="5" textAlign="left">
                      {data.getMaterial[0].etiqueta}
                    </Text>
                  )}
                </Stack>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Categoria
                  </Heading>
                  {editable ? (
                    <FormControl
                      control="input"
                      name="categoria"
                      placeholder="ej. Laptops"
                      type="text"
                    />
                  ) : (
                    <Text color="black" fontSize="5" textAlign="left">
                      {data.getMaterial[0].categoria}
                    </Text>
                  )}
                </Stack>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Descripcion
                  </Heading>
                  {editable ? (
                    <FormControl
                      control="input"
                      name="descripcion"
                      placeholder="descripcion"
                      type="text"
                    />
                  ) : (
                    <Text color="black" fontSize="5" textAlign="left">
                      {data.getMaterial[0].descripcion}
                    </Text>
                  )}
                </Stack>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Cantidad
                  </Heading>
                  {editable ? (
                    <FormControl
                      control="input"
                      name="cantidad"
                      placeholder="ej.10"
                      type="number"
                    />
                  ) : (
                    <Text color="black" fontSize="5" textAlign="left">
                      {data.getMaterial[0].cantidad}
                    </Text>
                  )}
                </Stack>
                <Stack borderRadius="14px" p={8} shadow="sm">
                  <Heading color="lendlab.gray.300" fontSize="2" textAlign="left">
                    Estado
                  </Heading>
                  <Stack direction="row">
                    {editable ? (
                      <FormControl
                        control="input"
                        name="estado"
                        placeholder="ej. Roto"
                        type="text"
                      />
                    ) : (
                      <Badge fontSize="5">{data.getMaterial[0].estado}</Badge>
                    )}
                  </Stack>
                </Stack>

                {/* 
                <FormControl
                  control="input"
                  name="foto"
                  placeholder="Foto"
                  type="text"
                />
                 */}
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
