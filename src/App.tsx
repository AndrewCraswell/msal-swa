import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Button, Caption1, Title3, Body1 } from "@fluentui/react-components";
import { msalLoginRequest } from "./lib/msalClient";

export function App() {
  const { accounts, instance, inProgress } = useMsal();

  const login = () => instance.loginRedirect(msalLoginRequest);

  const logout = () => instance.logoutRedirect();

  return (
    <>
      <Title3>Static Web App with MSAL!</Title3>
      <Body1>
        This demo app shows how to use MSAL React with a Azure Static Web App to
        enable preview deployments.
      </Body1>

      {inProgress && <Caption1>Loading...</Caption1>}

      <AuthenticatedTemplate>
        <Caption1>{JSON.stringify(accounts)}</Caption1>

        <Button onClick={login}>Login</Button>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Button onClick={logout}>Sign out</Button>
      </UnauthenticatedTemplate>
    </>
  );
}
