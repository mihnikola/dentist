import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { BooleanContext } from "@/context/BooleanContext";
import OnboardingScreen from "./InitialComponent";
import SignForm from "./SignForm";
import MainContainer from "./MainContainer";

const SignInScreenForm = () => {
  const { initialToken, getInitialTokenData, getTokenData, isToken } =
    useContext(BooleanContext);
  useEffect(() => {
    if (initialToken) {
      getTokenData();
    }
  }, [initialToken]);

  useEffect(() => {
    getInitialTokenData();
  }, []);
  return (
    <>
      {!initialToken && <OnboardingScreen />}
      {!isToken && initialToken && <SignForm />}
      {isToken && initialToken && <MainContainer />}
    </>
  );
};

export default SignInScreenForm;
