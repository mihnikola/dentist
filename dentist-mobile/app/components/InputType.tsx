import { View, TextInput } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";

const InputType = ({ iconName, placeholder, value, onChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
        alignItems: "center",
      }}
    >
      <IconSymbol name={iconName} size={20} color="black" />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default InputType;
