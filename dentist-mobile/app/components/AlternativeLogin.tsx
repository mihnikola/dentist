import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const AlternativeLogin = () => {
  const signInFacebookHandler = () => {};
  const signInGoogleHandler = () => {};
  const signInTwitterHandler = () => {};
  return (
    <>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Or, login with...
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={signInFacebookHandler}>
          <Image
            source={require("../../assets/images/facebookImg.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={signInTwitterHandler}>
          <Image
            source={require("../../assets/images/twitterImg.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={signInGoogleHandler}>
          <Image
            source={require("../../assets/images/googleImg.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AlternativeLogin;
