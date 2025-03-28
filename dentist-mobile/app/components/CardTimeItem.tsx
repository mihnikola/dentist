import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardTimeItem = ({ timeFrom, timeUntil }) => {
  return (
    <View style={styles.cardTime}>
      <View style={{ padding: 5 }}>
        <Text style={{ fontWeight: "800", color: "black", fontSize: 15 }}>
          {timeFrom} {"-"} {timeUntil}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding:5,
    height: 50,
    borderRadius: 20,
  },
});

export default CardTimeItem;
