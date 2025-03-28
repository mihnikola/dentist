import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigationIndependentTree,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import SplashScreen from "./SplashScreen";
import MainContainer from "./components/MainContainer";
import { createStackNavigator } from "@react-navigation/stack";
import { BooleanProvider } from "@/context/BooleanContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!loaded) {
    return null;
  }
  if (isLoading) {
    return <SplashScreen />;
  }
  if (!isLoading) {
    return (
      <BooleanProvider>
        <ThemeProvider
          value={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
          <MainContainer />
        </ThemeProvider>
      </BooleanProvider>
    );
  }
}
