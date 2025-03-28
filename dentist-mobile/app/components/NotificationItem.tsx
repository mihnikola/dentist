import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const NotificationItem = ({ item }) => {
  const { title, text, image } = item;

  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.cardTimeContainer}>
          <Text style={styles.date}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.name}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardInfoContainer: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
  },
  cardTimeContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  date: {
    fontSize: 14,
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#333",
  },
  name: {
    fontSize: 11,
    color: "#333",
  },
  position: {
    fontSize: 11,
    color: "#333",
  },
});

export default NotificationItem;
