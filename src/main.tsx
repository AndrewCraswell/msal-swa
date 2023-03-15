import React from "react";
import ReactDOM from "react-dom/client";
import { MsalProvider } from "@azure/msal-react";

import { App } from "./App";
import { msalClient } from "./lib/msalClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalClient}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
