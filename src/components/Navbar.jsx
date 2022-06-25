import React from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  background: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const Navbar = () => {
  const { theme,isAuth } = React.useContext(AuthContext);
  console.log(isAuth)
  return <NavbarWrapper theme={theme}>
      {isAuth ? <button>LOGOUT</button>: <button>LOGIN</button>}
  </NavbarWrapper>;
};

export default Navbar;