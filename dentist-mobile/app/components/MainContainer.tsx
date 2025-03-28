import React, { useContext, useEffect, useState } from "react";
import OnboardingScreen from "../components/InitialComponent";
import { BooleanContext, BooleanProvider } from "@/context/BooleanContext";
import { Stack } from "expo-router";
import SignForm from "./SignForm";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

const MainContainer = () => {
  const { initialToken, getInitialTokenData, getTokenData, isToken } =
    useContext(BooleanContext);

  useEffect(() => {
    if (initialToken) {
      getTokenData();
    }
  }, [initialToken, isToken]);

  useEffect(() => {
    getInitialTokenData();
  }, []);

  return (
    <NavigationIndependentTree>
      {!initialToken && <OnboardingScreen />}
      {!isToken && initialToken && <SignForm />}
      {isToken && initialToken && (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="components/Specialist"
            options={{ headerShown: false }}
          />
        </Stack>
      )}
    </NavigationIndependentTree>
  );
};

export default MainContainer;
