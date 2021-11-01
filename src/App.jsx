import React from "react";

import { Router } from "./routes/Router";

const App = () => {
  const appHeight = () => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  window.addEventListener("resize", appHeight);
  appHeight();

  return <Router />;
};

export default App;
