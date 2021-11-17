import { Badge, HStack, Stack, Text } from "@chakra-ui/layout";
import moment from "moment/min/moment-with-locales";
import "moment/locale/es";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { motion } from "framer-motion";

moment.locale("es");

export const ReservationItem = ({ reservation }) => {
  const date = useBreakpointValue({
    base: moment(reservation.fecha_hora, "YYYY-MM-DD HH:mm:ss").format(
      "D/MM/YYYY H:mm"
    ),
    md: moment(reservation.fecha_hora, "YYYY-MM-DD HH:mm:ss").format(
      "D [de] MMMM [del] YYYY [a las] H:mm"
    ),
  });
  return (
    <Stack
      rounded="lg"
      borderWidth={1}
      borderColor="lendlab.light.black.300"
      bg="lendlab.light.black.100"
      padding={8}
      h={200}
      animate={{ opacity: 1 }}
      as={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      layoutId={reservation.id_reserva}
    >
      <Stack align="flex-start" justifyContent="space-between" h="full">
        <Stack w="full">
          <HStack justify="space-between">
            <Text color="lendlab.light.black.1000" fontWeight="bold">
              Reserva #{reservation.id_reserva}
            </Text>
            <Text>{date}</Text>
          </HStack>
          <Text>
            Pediste:{" "}
            {reservation.material.map((material) => ` ${material.nombre}`)}
          </Text>
        </Stack>
        <HStack w="full" justify="space-between">
          <Badge variant="solid">
            {reservation.finalizada ? "FINALIZADA" : "SIN FINALIZAR"}
          </Badge>
        </HStack>
      </Stack>
    </Stack>
  );
};
