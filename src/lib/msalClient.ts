import {
  RedirectRequest,
  SilentRequest,
  Configuration,
  PublicClientApplication,
} from "@azure/msal-browser";

import { getBaseUrl } from "./getBaseUrl";

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
    clientId: "65316ec4-56b2-4cc7-a1c0-bd5b4a5b8213",
    redirectUri: getBaseUrl(),
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

export const msalClient = new PublicClientApplication(msalConfig);
