import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";

const ProfileItem = ({ title, iconName }) => {
  return (
    <>
      <View style={styles.twoItems}>
        <IconSymbol name={iconName} color="#2596be" />
        <Text style={styles.capture}>{title}</Text>
      </View>
      <View>
        <IconSymbol name="right" color="gray" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  twoItems: {
    flexDirection: "row",
    gap: 10,
  },
  capture: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ProfileItem;
