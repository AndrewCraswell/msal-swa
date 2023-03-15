import {
  RedirectRequest,
  SilentRequest,
  PublicClientApplication,
  EndSessionRequest,
} from "@azure/msal-browser";

export const msalLoginRequest: RedirectRequest = {
  prompt: "select_account",
  scopes: ["profile", "openid"],
  state: window.location.origin,
};

export const msalSilentRequest: SilentRequest = {
  scopes: ["user", "profile"],
};

export const msalLogoutRequest: EndSessionRequest = {
  state: window.location.origin,
  postLogoutRedirectUri: getRedirectUri(),
};

export const msalClient = new PublicClientApplication({
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
    redirectUri: getRedirectUri(),
  },
  cache: {
    cacheLocation: "localStorage",
  },
});

function getRedirectUri() {
  const previewEnvironmentUrl = import.meta.env.VITE_PREVIEW_ENVIRONMENT_URL;
  const envPattern = previewEnvironmentUrl.replace("*", "(?<branch>\\d+)");
  const regexPattern = new RegExp(envPattern);

  const result = regexPattern.exec(window.location.origin);
  if (result) {
    return import.meta.env.VITE_PREVIEW_REDIRECT_URL;
  }

  return window.location.origin;
}
