import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Home from "@pages/Student/Home";
import { STUDENT_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const StudentRouter = () => {
  return (
    <>
      <TabsNav routes={STUDENT_ROUTES} />
      <Switch>
        <Route exact component={Home} path="/app/inicio" />
        <Redirect to="/app/inicio" />
      </Switch>

      <Footer />
    </>
  );
};

export default StudentRouter;
