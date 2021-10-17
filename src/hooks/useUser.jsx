import { useContext } from "react";

import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const { userState, getUsers, selectUser, handleUserChange, resetUser, filterUsers } =
    useContext(UserContext);

  const { users, isSearching, user, userSelected, foundUsers } = userState;

  return {
    getUsers,
    selectUser,
    handleUserChange,
    resetUser,
    filterUsers,
    users,
    isSearching,
    user,
    userSelected,
    foundUsers,
  };
};
