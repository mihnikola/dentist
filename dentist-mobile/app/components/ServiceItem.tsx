import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

const ServiceItem = ({ item, check }) => {
  const navigation = useNavigation();
  const { title, image } = item;

  const chooseService = () => {
    navigation.navigate("(tabs)", { screen: "booking" });
  };
  const getDoctorsDataById = () => {

    console.log("getDoctorsDataById+++++++++")

  };

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
      }}
      onPress={check === 1 ? chooseService : getDoctorsDataById}
    >
      <LinearGradient
        style={styles.containerImage}
        colors={["#FAFBFE", "#E2EAFC", "#F0F1FE"]}
      >
        <Image source={{ uri: image }} style={styles.image} />
      </LinearGradient>
      <View style={styles.infoContainer}>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    paddingTop: 22,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardInfoContainer: {
    display: "flex",

    justifyContent: "space-around",
    flexDirection: "column",
  },
  cardContainer: {
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    padding: 15,
    width: 80,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  title: {
    fontSize: 16,
    color: "gray",
    fontWeight: "600",
  },
});

export default ServiceItem;
