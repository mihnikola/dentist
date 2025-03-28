import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import AnimationSuccess from "./AnimationSuccess";

const MessageBox = () => {
  const [loader, isLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoader(false);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <View style={{ width: "100%", gap: 20 }}>
        <View style={{ alignItems: "center" }}>
          <AnimationSuccess />
        </View>
        {!loader && <MessageContent />}
      </View>
    </View>
  );
};

const MessageContent = () => {

  const navigator = useNavigation();

  const allAppointmentsHandler = () => {
    navigator.navigate("(tabs)", { screen: "appointments" });
  };
  
  return (
    <>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "500" }}>
          Successful!
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "gray",
            width: "100%",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Your appointment has been processed
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={allAppointmentsHandler}
        >
          <Text style={styles.btnText}>My appointments</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontSize: 21,
    textAlign: "center",
  },
  btnSubmit: {
    backgroundColor: "#2f9dff",
    padding: 20,
    borderRadius: 20,
    margin: 15,
    textAlign: "center",
  },
});
export default MessageBox;
