import { View, StyleSheet, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={["#3166D8", "#093AB7", "#5791F2"]}
      style={styles.container}
    >
      <View style={{ height: 320, aspectRatio: 1 }}>
        <LottieView
          style={{ flex: 1 }}
          source={require("../assets/images/animation.json")}
          autoPlay
          loop
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
            fontStyle: "italic",
            color: "white",
          }}
        >
          Dental Care
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
