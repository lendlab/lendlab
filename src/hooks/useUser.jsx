import React, { useEffect } from "react";

export const useUser = (Users) => {
  const [usersFiltered, setUsersFiltered] = React.useState([]);
  const [userSelected, setUserSelected] = React.useState({});
  const [user, setUser] = React.useState("");

  const handleUserChange = ({ target }) => {
    setUser(target.value);
  };

  const handleReset = () => {
    setUser("");
  };

  const handleUserSelected = (user) => {
    setUserSelected(user);
  };

  const handleUsersSelected = (user) => {
    setusersSelected([...usersSelected, user]);
  };

  useEffect(() => {
    setUsersFiltered(
      Users.filter((userEl) => {
        return (
          userEl.nombre.toLowerCase().includes(user.toLowerCase()) ||
          userEl.cedula.toString().includes(user)
        );
      })
    );
  }, [user]);

  return {
    handleReset,
    user,
    usersFiltered,
    userSelected,
    handleUserChange,
    handleUsersSelected,
    handleUserSelected,
  };
};
