import { View, Text } from "react-native";
import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const SignForm = () => {
  const [check, setCheck] = useState(true);
  
  const checkValidation = () => {
    setCheck(!check);
  }

  return <>{check ? <Login validate={checkValidation} /> : <Register validate={checkValidation} />}</>;
};

export default SignForm;
