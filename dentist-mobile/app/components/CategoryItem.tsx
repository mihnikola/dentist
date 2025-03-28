import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CategoryItem = ({ item }) => {
  const { text, image } = item;
  return (
    <LinearGradient
      colors={["#89A6F7", "#5479E9", "#132C7B"]}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <LinearGradient
        style={styles.containerImage}
        colors={["#4568CE", "#6489F1", "#6B7FB8"]}
      >
        <Image source={{ uri: image }} style={styles.image} />
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    position: "absolute",
    top: 65,
    left: 10,
    backgroundColor: "gray",
    display: "flex",
    alignSelf: "flex-end",
    overflow: "hidden",
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container: {
    width: 140,
    height: 200,
    textAlign: "left",
    overflow: "hidden",
    borderRadius: 20,
    margin: 5,
  },
  inner: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "900",
  },
});

export default CategoryItem;
