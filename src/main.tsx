import React from "react";
import ReactDOM from "react-dom/client";
import { MsalProvider } from "@azure/msal-react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import { App } from "./components/App";
import { msalClient } from "./lib/msalClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <MsalProvider instance={msalClient}>
        <App />
      </MsalProvider>
    </FluentProvider>
  </React.StrictMode>
);
