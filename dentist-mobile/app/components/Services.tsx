import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ data, check }) => {
  return (
    <View style={styles.container}>
      {check === 1 && <View style={styles.containerCapture}>
        <Text style={styles.title}>Professional services</Text>
      </View>}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.list}>
          {data.map((item) => {
            return <ServiceItem key={item.id} item={item} check={check} />;
          })}
        </View>
      </ScrollView>
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
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  container: {
    backgroundColor: "white",
    padding: 0,
  },
});

export default Services;
