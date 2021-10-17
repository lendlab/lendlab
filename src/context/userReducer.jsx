export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "RESET_USER":
      return {
        ...state,
        isSearching: false,
        user: "",
      };
    case "SELECT_USER":
      return {
        ...state,
        userSelected: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "FILTER_USERS":
      return {
        ...state,
        isSearching: !!action.payload.length > 0 || false,
        foundUsers: [
          ...state.users.filter(({ ...user }) => {
            return (
              user.nombre.toLowerCase().includes(action.payload.toLowerCase()) ||
              user.cedula.toString().includes(action.payload)
            );
          }),
        ],
      };

    default:
      return state;
  }
};
