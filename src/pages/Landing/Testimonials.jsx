import {
  Avatar,
  Box,
  chakra,
  Container,
  Heading,
  Flex,
  Icon,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const testimonials = [
  {
    name: "Gianni Rosas",
    role: "Chief Marketing Officer",
    content:
      "Realmente me ahorra tiempo y esfuerzo. Es exactamente lo que le ha faltado a nuestro trabajo. LendLab es el recurso más valioso que NUNCA hemos consumido. Realmente lo recomiendo.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Mercedes Khars",
    role: "Entrepreneur",
    content:
      "¡Buen trabajo, definitivamente volveré a utilizarlo! LendLab superó por completo nuestras expectativas. Es excelente y sorprendentemente todo es simplemente gratuito",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Josefina ",
    role: "Laboratorista",
    content:
      "Hombre, esto está mejorando cada vez más a medida que aprendo más sobre el producto. Está todo bien. ¡Buen trabajo, definitivamente volveré a a usarlo! Gracias por el gran servicio.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Rodrigo Villar",
    role: "Alumno",
    content:
      "Amo el sistema. También me gustaría agradecer a todo su personal. ¡Lo mejor de la red! Si desea un marketing real que funcione y una implementación efectiva, LendLab lo tiene cubierto",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

function TestmonialCard(props) {
  const { name, role, content, avatar, index } = props;

  return (
    <Flex
      bg={useColorModeValue("lendlab.light.black.200", "lendlab.light.dark.200")}
      borderColor={useColorModeValue("lendlab.light.black.300", "lendlab.dark.black.300")}
      borderWidth="1px"
      direction={{ base: "column-reverse", md: "row" }}
      justifyContent={"space-between"}
      p={10}
      position={"relative"}
      rounded={"md"}
      width={"full"}
    >
      <Flex direction={"column"} justifyContent={"space-between"} textAlign={"left"}>
        <Text fontWeight={"medium"} pb={4}>
          {content}
        </Text>
        <Text fontSize={"2"} fontWeight={"bold"}>
          {name}
          <chakra.span
            color={useColorModeValue("lendlab.light.black.800", "lendlab.dark.black.800")}
            fontWeight={"medium"}
          >
            {" "}
            - {role}
          </chakra.span>
        </Text>
      </Flex>
      <Avatar
        alignSelf={"center"}
        height={"80px"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        src={avatar}
        width={"80px"}
      />
    </Flex>
  );
}

export default function Testimonials() {
  return (
    <Container direction={"column"} textAlign={"center"} variant="landing">
      <Box margin={"auto"}>
        <Text as="b" fontSize="6" textTransform={"uppercase"} variant="bold">
          NOS PREFIEREN
        </Text>
        <Heading fontSize={{ md: "8", base: "7" }} py={5}>
          Ofrecemos un excelente servicio
        </Heading>
        <Text fontWeight={"medium"} margin={"auto"} width={"70%"}>
          {" "}
          <Text as="b" variant="bold">
            120+
          </Text>{" "}
          instituciones ya utilizan lendlab para administrar sus préstamos
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, xl: 2 }} mt={16} mx={"auto"} spacing={"20"}>
        {testimonials.map((cardInfo, index) => (
          <TestmonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
