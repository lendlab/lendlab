import { Stack } from "@chakra-ui/layout";
import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Config from "@pages/Config";
import Courses from "@pages/Director/Courses";
import NewCourse from "@pages/Director/Courses/New";
import Laboratorists from "@pages/Director/Laboratorists";
import NewLaboratorist from "@pages/Director/Laboratorists/New";
import { DIRECTOR_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Laboratorist from "@pages/Director/Laboratorists/Laboratorist";
import Course from "@pages/Director/Courses/Course";

const DirectorRoutes = () => {
  return (
    <Stack h="100%" minH="100vh" spacing="0">
      <TabsNav routes={DIRECTOR_ROUTES} />
      <Switch>
        <Route
          exact
          component={Laboratorists}
          path="/director/laboratoristas"
        />
        <Route
          exact
          component={NewLaboratorist}
          path="/director/laboratoristas/nuevo"
        />
        <Route
          exact
          component={Laboratorist}
          path="/director/laboratoristas/:cedula"
        />
        <Route exact component={Course} path="/director/cursos/:token" />
        <Route exact component={Courses} path="/director/cursos" />
        <Route exact component={NewCourse} path="/director/cursos/nuevo" />
        <Route exact component={Config} path="/director/configuracion" />
        <Redirect to="/director/laboratoristas" />
      </Switch>
      <Footer />
    </Stack>
  );
};

export default DirectorRoutes;
