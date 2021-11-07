import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  Button,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useLogout } from "@graphql/auth/custom-hook";
import React from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const UserMenu = ({ name }) => {
  const [logout, { loading }, apolloClient] = useLogout();

  const size = useBreakpointValue({ base: "sm", md: "md" });

  const { pathname } = useLocation();

  const pathSplitted = pathname.split("/");

  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton>
        <Avatar alt={name} name={name} size={size} />
      </MenuButton>

      <MenuList>
        <MenuGroup title={name}>
          <MenuItem
            as={Link}
            icon={<Icon as={FiSettings} />}
            to={`/${pathSplitted[1]}/configuracion`}
          >
            Configuración
          </MenuItem>
          <MenuItem
            closeOnSelect={false}
            icon={loading ? <Spinner size="sm" /> : <Icon as={FiLogOut} />}
            onClick={async () => {
              await logout();
              await apolloClient.resetStore();
              await apolloClient.cache.reset();
            }}
          >
            {loading ? "Cerrando sesión..." : "Cerrar sesión"}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
