import {
  RedirectRequest,
  SilentRequest,
  Configuration,
  PublicClientApplication,
} from "@azure/msal-browser";

export const msalLoginRequest: RedirectRequest = {
  prompt: "select_account",
  scopes: ["profile", "openid"],
  state: window.location.origin,
};

export const msalSilentRequest: SilentRequest = {
  scopes: ["user", "profile"],
};

const msalConfig: Configuration = {
  auth: {
    clientId: "16561780-a732-4b5a-8d0a-9eaf822a692c",
    authority:
      "https://login.microsoftonline.com/6e5a9394-b5e1-4fbb-814e-a6c0be5bec86",
    redirectUri: window.location.origin, // If in a stage environment, redirect to auth portal
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

export const msalClient = new PublicClientApplication(msalConfig);
