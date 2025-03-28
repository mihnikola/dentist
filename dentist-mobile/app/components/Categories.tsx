import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item) => {
          return <CategoryItem key={item.id} item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

export default Categories;
