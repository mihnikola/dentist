import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardDateItem = ({ day, dayWeek }) => {
  return (
    <View style={styles.cardDate}>
      <View>
        <Text style={{ fontWeight: "800", color: "black", fontSize: 22 }}>{day}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "800", color: "gray", fontSize: 15, textTransform: 'uppercase' }}>{dayWeek?.substring(0,3)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDate: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
  },
});

export default CardDateItem;
