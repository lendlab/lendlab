import { Stack } from "@chakra-ui/layout";
import CartModal from "@components/CartModal";
import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Config from "@pages/Config";
import Home from "@pages/Student/Home";
import MyLends from "@pages/Student/My-Lends";
import MyReservations from "@pages/Student/My-Reservations";
import Search from "@pages/Student/Search";
import { STUDENT_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const StudentRouter = () => {
  return (
    <Stack h="100%" minH="100vh" spacing="0">
      <TabsNav routes={STUDENT_ROUTES} />
      <Switch>
        <Route exact component={Home} path="/app/inicio" />
        <Route exact component={Search} path="/app/busqueda/:material" />
        <Route exact component={Config} path="/app/configuracion" />
        <Route exact component={MyReservations} path="/app/mis-reservas" />
        <Route exact component={MyLends} path="/app/mis-prestamos" />
        <Redirect to="/app/inicio" />
      </Switch>
      <Stack align="center" bottom="0" p="4" position="fixed" w="full">
        <CartModal />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default StudentRouter;
