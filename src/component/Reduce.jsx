function Reduce(state, action) {
  if (action.type === "Loading") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "toggleTheme") {
    return {
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    };
  }
  if (action.type === "isActive") {
    return {
      ...state,
      active: action.payload,
    };
  }
  if (action.type === "DisPlayData") {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  }
  if (action.type === "SearchData") {
    return {
      ...state,
      search: action.payload,
    };
  }

  return state;
}

export default Reduce;
