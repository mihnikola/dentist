import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function Animation() {
  return (
    <View style={{ height:320, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../../assets/images/animation.json")}
        autoPlay
        loop
      />
    </View>
  );
}
