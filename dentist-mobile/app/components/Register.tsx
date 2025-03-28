import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React, { useEffect, useState } from "react";
import AlternativeLogin from "./AlternativeLogin";
import InputType from "./InputType";
import axios from "axios";

const Register = ({ validate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

  const redirectHandler = () => {
    validate();
  };

  const submitRegisterHandler = () => {
    console.log("Submit button clicked");
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    const data = {
      email: email,
      password: password,
      name: name,
    };
    submitFormData(data);

    console.log("submitRegisterHandler++++-+-+-++-+--", data);
  };

  const submitFormData = async (data) => {
    try {
      await axios
        .post("http://10.58.158.121:5000/users", {
          params: data,
        })
        .then((response) => {
          
          console.log(response.data);
          // navigation.navigate("components/Login");
          validate();
          ToastAndroid.showWithGravityAndOffset(
            'Registration successful',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        })
        .catch((err) => console.log("erro promises", err));
    } catch (er) {
      console.log("try/catch", er);
    }
  };



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Image
          source={require("../../assets/images/logoDentist.png")}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "300" }}>
          Dental care
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontWeight: "500",
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        Register
      </Text>

      <InputType
        iconName="person"
        placeholder="First and last name"
        value={name}
        onChange={setName}
      />
      <InputType
        iconName="email"
        placeholder="Email ID"
        value={email}
        onChange={setEmail}
      />

      <InputType
        iconName="pass"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <InputType
        iconName="pass"
        placeholder="Confirm password"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
      />
      {/* <InputType iconName="pass" placeholder="Phone" value={passwordConfirm} onChange={setPasswordConfirm}/> */}

      <TouchableOpacity
        onPress={submitRegisterHandler}
        style={{
          backgroundColor: "#2f9dff",
          padding: 20,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
          Register
        </Text>
      </TouchableOpacity>

      <AlternativeLogin />
      <View
        style={{
          padding: 20,
          alignItems: "center",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Already registered?</Text>
        <TouchableOpacity onPress={redirectHandler}>
          <Text
            style={{ color: "#000", fontWeight: "700", alignItems: "center" }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
