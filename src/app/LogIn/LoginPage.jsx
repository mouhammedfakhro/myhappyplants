import React, { useState } from "react";
import LoginPain from "./LoginPain";
import ForgotenPassword from "./ForgotenPassword";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleForgotPassword = (state) => {
    setForgotPassword(state);
  };

  return (
    <>
      <img className="wetPlantLeafsPNG" src="/src/LogIn/wetPlantLeafs.png" alt="" />
      <img className="smallPlantLogoPNG" src="/src/LogIn/smallPlantLogo.png" alt="" />

      {forgotPassword ? (
        <>
          {console.log("Forgot Password triggered")}
          <ForgotenPassword handleForgotPassword={handleForgotPassword} />
        </>
      ) : (<LoginPain handleForgotPassword={handleForgotPassword} />
      )}
    </>
  );
}

export default LoginPage;
