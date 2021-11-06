import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLogout } from "@graphql/auth/custom-hook";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const UserMenu = ({ name }) => {
  const [logout, { loading }, apolloClient] = useLogout();

  const size = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton>
        <Avatar alt={name} name={name} size={size} />
      </MenuButton>

      <MenuList>
        <MenuItem
          icon={<Icon as={FiLogOut} />}
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
            await apolloClient.cache.reset();
          }}
        >
          Cerrar sesión
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
