import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { prettyDateFormat } from "@/helpers";

const AppointmentsItem = ({ item }) => {
  const { date, time, doctors, services } = item;

  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={{ uri: doctors.image }} style={styles.image} />
      </View>
      <View style={styles.container}>
      <View>
        <View style={styles.info}>
          <Text style={styles.date}>{prettyDateFormat(date)}</Text>
          <Text style={styles.name}>{doctors.name}</Text>
          <Text style={styles.position}>{services.title}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentDate: {
    flexDirection: "row",
  },
  contentTime: {
    display: "flex",
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  date: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
  },
  time: {
    fontSize: 14,
    fontWeight: "800",

    color: "#333",
  },
  name: {
    fontSize: 13,
    paddingTop: 15,
    fontWeight: "600",
    color: "#333",
  },
  position: {
    fontSize: 11,
    fontWeight: "500",
    color: "gray",
  },
});

export default AppointmentsItem;
