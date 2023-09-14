import { createContext, useContext, useReducer, useEffect } from "react";
import Reduce from "./Reduce";

const AppContext = createContext();

function AppProvider(prop) {
  const { children } = prop;
  const initalValue = {
    theme: "light",
    active: 0,
    data: [],
    loading: false,
    search: "Elon musk",
  };
  const [state, dispatch] = useReducer(Reduce, initalValue);
  const url = `https://google-search74.p.rapidapi.com/?query=${state.search}&limit=10&related_keywords=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f498e99142msh758c6c192d1643ep10bfb6jsnc3195b367a36",
      "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    dispatch({ type: "Loading" });
    const response = await fetch(url, options);
    const result = await response.json();
    dispatch({ type: "DisPlayData", payload: result });
  };

  useEffect(() => {
    fetchData();
  }, [state.search]);

  function ToggleTheme() {
    dispatch({ type: "toggleTheme" });
  }
  function isActive(id) {
    dispatch({ type: "isActive", payload: id });
  }
  function SearchData(id) {
    dispatch({ type: "SearchData", payload: id });
  }

  const values = {
    ...state,
    ToggleTheme,
    isActive,
    SearchData,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
