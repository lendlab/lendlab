import { useApolloClient } from "@apollo/client";
import React, { useReducer } from "react";

import { GET_ALL_USERS } from "../graphql/queries/users";

import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";

const INITIAL_STATE = {
  foundUsers: [],
  userSelected: null,
  users: [],
  user: "",
  isSearching: false,
};

export const UserProvider = ({ children }) => {
  const { mutate, query } = useApolloClient();
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  async function getUsers() {
    const { data } = await query({
      query: GET_ALL_USERS,
    });

    if (data) {
      dispatch({ type: "ADD_ALL_USERS", payload: data.getUsers });
    }
  }
  const selectUser = (user) => {
    dispatch({ type: "SELECT_USER", payload: user });
  };

  const handleUserChange = ({ target }) => {
    dispatch({ type: "SET_USER", payload: target.value });
  };

  const resetUser = () => {
    dispatch({ type: "RESET_USER" });
  };

  const filterUsers = ({ target }) => {
    dispatch({ type: "FILTER_USERS", payload: target.value });
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        getUsers,
        selectUser,
        handleUserChange,
        resetUser,
        filterUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
