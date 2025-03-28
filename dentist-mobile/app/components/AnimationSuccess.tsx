import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function AnimationSuccess() {
  return (
    <View style={{ height:320, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1}}
        source={require("../../assets/images/Animation - 1742195167529.json")}
        autoPlay
        duration={1500}
        loop={false}
      />
    </View>
  );
}
