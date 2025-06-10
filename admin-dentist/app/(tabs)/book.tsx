// DoctorListScreen.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DOCTORS_DATA from "@/constants";

const DoctorListScreen = () => {
  const navigation = useNavigation();

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      style={styles.doctorCard}
      onPress={() =>
        navigation.navigate("components/DoctorServices", {
          data:item,
          doctorName: item.name,
          doctorServices: item.services, // Pass the services data
        })
      }
    >
      <View style={styles.cardHeader}>
        <Image style={styles.tinyLogo} source={item.img} />
        <View style={styles.details}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
          <Text style={styles.doctorRating}>Rating: {item.rating} ⭐</Text>
        </View>
        <View>
          <Text style={styles.contactButtonText}>Book</Text>
        </View>
      </View>
      <View style={styles.cardBody}></View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleContent}>Our doctors</Text>
      </View>
      <FlatList
        data={DOCTORS_DATA}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContent: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
  },
  details: {
    display: "flex",
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    paddingTop: 10,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  doctorCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1, // Allow name to take available space
    marginRight: 10,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#007AFF", // A distinct color for specialty
    fontWeight: "600",
  },
  cardBody: {
    marginBottom: 10,
  },
  doctorAddress: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  doctorRating: {
    fontSize: 14,
    color: "#666",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end", // Align buttons to the right
  },
  contactButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10, // Space between buttons
  },
  contactButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DoctorListScreen;
