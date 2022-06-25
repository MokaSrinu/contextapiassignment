import { AuthContext } from "../context/AuthContext"
  import React from "react";
  const Loginstatus=()=>{
    const { isAuth, handleAuth,toggleinfo,info } = React.useContext(AuthContext);
    console.log(info);
    return (
        <>
        <h1>Token:{info.token}</h1>
        </>
    )
 }
 export default Loginstatus;