import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [info, setinfo] = React.useState(""); // "light", "dark"
  const [theme, setTheme] = React.useState("dark"); // "light", "dark"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleinfo = (res,payload) => {
    setinfo(res);
    setinfo(...res,payload)
  };
  const handleAuth = (val) => {
    setIsAuth(!isAuth);
  };


  return (
    <AuthContext.Provider value={{ isAuth, handleAuth ,info ,toggleinfo,theme,toggleTheme}}>
      {children}
    </AuthContext.Provider>
  );
}