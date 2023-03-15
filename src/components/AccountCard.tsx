import { AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import {
  Button,
  Card,
  CardHeader,
  Persona,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  MenuList,
} from "@fluentui/react-components";
import {
  MoreHorizontal20Regular,
  SignOut20Regular,
} from "@fluentui/react-icons";
import { msalLogoutRequest } from "../lib/msalClient";

type AccountCardProps = {
  account?: AccountInfo;
};

export function AccountCard({ account }: AccountCardProps) {
  const { instance: msal } = useMsal();

  const logout = () =>
    msal.logoutRedirect({
      ...msalLogoutRequest,
      account,
    });

  return (
    <Card orientation="horizontal" style={{ maxWidth: 300 }}>
      <CardHeader
        header={
          <Persona
            name={account?.name}
            secondaryText={account?.username}
            presence={{ status: "available" }}
          />
        }
        action={
          <Menu>
            <MenuTrigger>
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem icon={<SignOut20Regular />} onClick={logout}>
                  Sign out
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        }
      />
    </Card>
  );
}
