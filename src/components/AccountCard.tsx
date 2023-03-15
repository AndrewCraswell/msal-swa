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

type AccountCardProps = {
  name?: string;
  email?: string;
};

export function AccountCard({ email, name }: AccountCardProps) {
  const { instance: msal } = useMsal();

  const logout = () => msal.logoutRedirect();

  return (
    <Card orientation="horizontal" style={{ maxWidth: 300 }}>
      <CardHeader
        header={
          <Persona
            name={name}
            secondaryText={email}
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
