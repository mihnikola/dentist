import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconSymbol } from "@/components/ui/IconSymbol";
import ProfileItem from "../components/ProfileItem";
import { useContext, useState } from "react";
import { BooleanContext } from "@/context/BooleanContext";
import { useNavigation } from "expo-router";

export default function TabFourScreen() {
  const nav = useNavigation();
  const { removeTokenData } = useContext(BooleanContext);
  const logoutHandler = () => {
    // Show confirmation alert
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          removeTokenData();
          // nav.navigate("(tabs)",{: 'index'});
          // jebacu vam mater kad stignem kuci
        },
      },
    ]);
  };

  return (
    <View style={styles.containerProfile}>
      <LinearGradient
        colors={["#BACAFE", "#9FB7FC", "#7A9BFC"]}
        style={styles.headerContainer}
      >
        <View style={styles.navigationContainer}>
          {/* <View>
            <IconSymbol name="left" color="white" size={30} />
          </View> */}
          {/* <View>
            <Text style={styles.profile}>Profile</Text>
          </View> */}
          <TouchableOpacity onPress={logoutHandler}>
            <IconSymbol name="logout" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View>
            {/* <Image source={profiImg} style={styles.profileImg} /> */}
          </View>
          <View>
            <Text style={styles.name}>Larisa Kucherova</Text>
          </View>
          <View>
            <Text style={styles.phoneNumber}>+7 987 6543210</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.details}>
        <View style={styles.itemData}>
          <ProfileItem iconName="person" title="My profile" />
        </View>
        <View style={styles.itemData}>
          <ProfileItem iconName="privacy" title="Private policy" />
        </View>
        <View style={styles.itemData}>
          <ProfileItem iconName="insert" title="About app" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: 30,
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: "300",
    color: "#fff",
  },
  profileImg: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 100,
  },
  profile: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  containerProfile: {
    flex: 1,
  },

  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  infoContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    marginBottom: 20,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
