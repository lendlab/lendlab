import React from "react";
import moment from "moment";
import es from "moment/locale/es";

import { Router } from "./routes/Router";
moment.locale("es", es);

const App = () => {
  return <Router />;
};

export default App;
