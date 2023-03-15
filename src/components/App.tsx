import { AccountInfo, InteractionStatus } from "@azure/msal-browser";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Button, Title3, Body1, Spinner } from "@fluentui/react-components";
import { Key20Regular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";

import { msalLoginRequest } from "../lib/msalClient";
import { AccountCard } from "./AccountCard";

export function App() {
  const { accounts, inProgress, instance: msal } = useMsal();
  const [account, setAccount] = useState<AccountInfo | undefined>(undefined);

  useEffect(() => {
    const account = accounts.length ? accounts[0] : null;
    if (account) {
      setAccount(account);
      msal.setActiveAccount(account);
    }
  }, [accounts]);

  const login = () => msal.loginRedirect(msalLoginRequest);

  return (
    <>
      <Title3 block>Static Web App with MSAL!</Title3>
      <Body1 block style={{ marginBottom: "2em" }}>
        This demo app shows how to use MSAL React with a Azure Static Web App to
        enable preview deployments.
      </Body1>

      {isAuthInProgress(inProgress) && (
        <Spinner
          size="small"
          label="Loading account..."
          style={{ justifyContent: "start" }}
        />
      )}

      <AuthenticatedTemplate>
        <AccountCard name={account?.name} email={account?.username} />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Button onClick={login} icon={<Key20Regular />}>
          Login
        </Button>
      </UnauthenticatedTemplate>
    </>
  );
}

function isAuthInProgress(status: InteractionStatus): boolean {
  return [InteractionStatus.Startup].includes(status);
}
