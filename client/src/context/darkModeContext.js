import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkmodeContextProvider = ({ childern }) => {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") || false
  );

  const toggle = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggle }}>
      {childern}
    </DarkModeContext.Provider>
  );
};
