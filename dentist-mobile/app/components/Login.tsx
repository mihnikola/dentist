import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useNavigation } from "expo-router";
import axios from "axios";
import { BooleanContext } from "@/context/BooleanContext";
import SignForm from "./SignForm";
import HomeScreen from "./HomeScreen";

const Login = ({ validate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addTokenData, isToken,getTokenData } = useContext(BooleanContext);
  const submitLoadHandler = async () => {
    if (!email || !password) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.BOTTOM);
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      await axios
        .post("http://10.58.158.121:5000/users/login", {
          data,
        })
        .then((response) => {
          console.log(response.status, response.data);
          if (response.status === 200) {
            addTokenData(response.data.token);
            getTokenData();
            ToastAndroid.showWithGravityAndOffset(
              "Login successful",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
        })
        .catch((err) => console.log("erro promises", err));
    } catch (er) {
      console.log("try/catch", er);
    }
  };



  const goRegisterHandler = () => {
    validate();
    // navigator.navigate('components/Register');
  };

  const signInFacebookHandler = () => {};
  const signInGoogleHandler = () => {};
  const signInTwitterHandler = () => {};




  if (!isToken) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Image
            source={require("../../assets/images/logoDentist.png")}
            style={{ height: 200, width: 200 }}
          />
          <Text style={{ padding: 10, fontSize: 20, fontWeight: "300" }}>
            Dental care
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontWeight: "900",
            fontSize: 30,
            marginBottom: 20,
          }}
        >
          Login
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <IconSymbol name="email" size={20} color="black" />
          <TextInput
            placeholder="Email"
            style={{ width: "100%" }}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems: "center",
          }}
        >
          <IconSymbol name="pass" size={20} color="black" />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#000", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={submitLoadHandler}
          style={{
            backgroundColor: "#2f9dff",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", color: "", marginBottom: 20 }}>
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
        <View
          style={{
            padding: 20,
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>You don't have account?</Text>
          <TouchableOpacity onPress={goRegisterHandler}>
            <Text
              style={{ color: "#000", fontWeight: "700", alignItems: "center" }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  if (isToken.token) {
    return <HomeScreen />;
  }
};

export default Login;
