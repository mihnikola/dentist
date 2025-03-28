import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DoctorItem from "./DoctorItem";

const Doctors = ({ data, title, duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCapture}>
        <Text style={styles.title}>{title}</Text>
        {duration === "row" ? <Text style={styles.btnStyle}>Show all {" >> "} </Text>:""}
      </View>
      <View
        style={[
          styles.list,
          duration === "row" ? styles.rowDirection : styles.columnDirection,
        ]}
      >
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
        {data.map((item) => {
          return <DoctorItem key={item.id} item={item} />;
        })}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    color: "#132C7B",
    fontSize: 16,
  },
  rowDirection: {
    flexDirection: "row",
  },
  columnDirection: {
    flexDirection: "column",
  },
  containerCapture: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
});

export default Doctors;
