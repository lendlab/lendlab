import React, { useEffect } from "react";

export const useUser = (Users) => {
  const [usersFiltered, setUsersFiltered] = React.useState([]);
  const [userSelected, setUserSelected] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleUserChange = ({ target }) => {
    setUser(target.value);
  };

  const handleUserSelected = (user) => {
    setUserSelected(user.nombre);
  };

  const handleUsersSelected = (user) => {
    setusersSelected([...usersSelected, user]);
  };

  useEffect(() => {
    setUsersFiltered(
      Users.filter((userEl) => {
        return userEl.nombre.toLowerCase().includes(user.toLowerCase());
      })
    );
  }, [user]);

  return {
    user,
    usersFiltered,
    userSelected,
    handleUserChange,
    handleUsersSelected,
    handleUserSelected,
  };
};
