import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { CiRouter } from "react-icons/ci";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    {/* <Router> */}
    <StrictMode>
      <App />
      {/* <Switch> */}
      {/* <Route path="/" exact component={App} /> */}
      {/* </Switch> */}
    </StrictMode>
    {/* </Router> */}
  </>
);
