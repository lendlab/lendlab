import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import HeroIllustration from "./Illustrations/HeroIllustration";

const Hero = () => {
  return (
    <Container py={{ base: 20, md: 28 }} variant="landing">
      <Stack alignItems="center" justifyContent="center" spacing="8">
        <Heading as="h1" fontSize={{ lg: "10", md: "9", base: "8" }} textAlign="center">
          Los préstamos de tu institución ahora en forma online
        </Heading>
        <Text as="h2" fontSize="6" textAlign="center">
          LendLab le brinda a todos los centros educativos del Uruguay una organización única en
          cuanto a la gestión, administración y realización de préstamos de materiales,
          proveyéndoles de una magnífica y grata experiencia a través de nuestra aplicación web.{" "}
          <Text as="b" fontSize="6">
            Totalmente gratuito
          </Text>
        </Text>
        <Link to="/registro">
        <Button rightIcon={<Icon as={FiArrowRight} />} size="lg" variant="primary">
          Empezar ahora
        </Button>
        </Link>
        <Flex w={"full"}>
          <HeroIllustration height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
