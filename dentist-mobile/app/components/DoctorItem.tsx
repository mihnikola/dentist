import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useNavigation } from "expo-router";
import { BooleanContext } from "@/context/BooleanContext";

const DoctorItem = ({ item }) => {
  const { name, experience, votes, image, position, id } = item;
  const navigation = useNavigation();
  const {changeDoctorId} = useContext(BooleanContext);
  
  const chooseSpecialist = (item) => {
    changeDoctorId(item.id);
    navigation.navigate("components/Specialist");
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => chooseSpecialist(item)}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.position}>{position}</Text>
          </View>
        </View>

        <View style={styles.data}>
          {/* <View style={{ flexDirection: "row" }}>
            <Text style={styles.votes}>
              <IconSymbol name="star" color="orange" />
            </Text>
            <View>
              <Text style={styles.votes}>{votes}</Text>
            </View>
            <View>
              <Text style={styles.counter}>people votes (52)</Text>
            </View>
          </View> */}

          <View>
            <Text style={styles.experience}>
              Experience of {experience} years
            </Text>
          </View>
          {/* <View>
            <Text style={styles.price}>2 900 P</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  counter: {
    paddingTop: 4,
    fontWeight: "700",
    color: "gray",
  },
  price: {
    fontWeight: "900",
  },
  data: {
    marginLeft: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  votes: {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "800",
  },
  experience: {
    fontSize: 12,
    paddingTop: 15,
    paddingLeft: 7,
    fontWeight: "800",
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardInfoContainer: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    padding: 10,
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
  image: {
    width: 60,
    height: 70,
    borderRadius: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  position: {
    fontSize: 14,
    color: "gray",
  },
  container: {
    flex: 1,
  },
});

export default DoctorItem;
