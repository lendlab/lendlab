import { Badge, Button, Image, Stack } from "@chakra-ui/react";
import { useLend } from "@hooks/useLend";
import { Cart } from "@icons";
import { CartItem, Drawer, Heading, Text } from "@ui";
import moment from "moment";
import React from "react";
import { useCart } from "@hooks/useCart";
import { ME } from "@graphql/mutations/auth";
import { useQuery } from "@apollo/client";

export const CartDrawer = () => {
  const { cart, isOpen, closeCart, deleteMaterialFromCart, cartCount, clearCart } = useCart();

  const { createReservationLoading, maxReserveId, createReservation } = useLend();

  const { data } = useQuery(ME);

  return (
    <>
      <Drawer
        body={
          <Stack spacing={4}>
            {cartCount > 0 ? (
              cart.map(({ id_material, nombre, descripcion, foto }, index) => (
                <CartItem
                  key={index}
                  deleteMaterialFromCart={deleteMaterialFromCart}
                  desc={descripcion}
                  id={id_material}
                  nombre={nombre}
                  src={foto}
                />
              ))
            ) : (
              <Heading fontSize="6">No tienes elementos en tu carrito. Agrega ya</Heading>
            )}
          </Stack>
        }
        footer={
          cartCount > 0 && (
            <Button
              isLoading={createReservationLoading}
              variant="primary"
              onClick={() => {
                cart.map(({ id_material }, index, arr) => {
                  const fecha_hora = moment().add(index, "seconds").toDate();

                  createReservation({
                    variables: {
                      data: {
                        id_reserva: parseFloat(maxReserveId),
                        finalizada: true,
                        fecha_hora,
                        user: {
                          cedula: parseInt(data.me.cedula),
                        },
                        material: {
                          id_material,
                        },
                      },
                    },
                    update: () => {
                      closeCart();
                      clearCart();
                    },
                  });
                });
                toast({
                  title: `Has reservado!`,
                  description: "Lo has hecho correctamente c:",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            >
              Pedir {cartCount > 1 ? "prestados" : "prestado"} ({cartCount}){" "}
              {cartCount > 1 ? "materiales" : "material"}
            </Button>
          )
        }
        isOpen={isOpen}
        size="md"
        title={`Tu carrito (${cartCount})`}
        onClose={closeCart}
      />
    </>
  );
};
