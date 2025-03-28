import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AppointmentsItem from "./AppointmentsItem";

const Appointments = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCapture}>
        <View>
          <Text style={styles.title}>My appointments</Text>
        </View>
        <Text style={styles.btnStyle}>Show all {" >> "} </Text>
      </View>

      <View style={styles.list}>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
          {data.map((item) => {
            return <AppointmentsItem key={item.id} item={item} />;
          })}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerCapture: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnStyle: {
    color: "#132C7B",
    fontSize: 16,
  },
  list: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
  },
  title: {

    fontSize: 20,
    fontWeight: "800",
  },
  container: {
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
});
export default Appointments;
