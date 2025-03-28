import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";
import { NOTIFICATIONS_DATA } from "@/constants";
import NotificationItem from "../components/NotificationItem";
export default function TabTwoScreen() {
  const [activeTab, setActiveTab] = useState("news");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        {/* <View>
          <IconSymbol name="left" color="black" size={30} />
        </View> */}
        <View>
          <Text style={styles.profile}>My Notifications</Text>
        </View>
      </View>
      <View style={styles.grayLine} />

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "news" && styles.activeTab]}
          onPress={() => handleTabClick("news")}
        >
          <Text
            style={[styles.tabText, activeTab === "news" && styles.activeText]}
          >
            Unread
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "completed" && styles.activeTab,
          ]}
          onPress={() => handleTabClick("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed" && styles.activeText,
            ]}
          >
            Read
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {NOTIFICATIONS_DATA.map((item) => {
          return <NotificationItem key={item.id} item={item} />;
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    gap: 10,
    marginTop: 6,
  },
  grayLine: {
    height: 2,
    backgroundColor: "#ccc",
  },
  container: {
    flex: 1,
  },
  activeText: {
    color: "#000",
    fontWeight: "600",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    // width: '75%'

  },
  profile: {
    fontSize: 20,
    fontWeight: "800",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    borderWidth: 2.5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#007bff",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },

  tabContent: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
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
  },
  cardTimeContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
    paddingLeft: 10,
  },
  image: {
    width: 60,
    height: 70,
    borderRadius: 5,
  },
  date: {
    fontSize: 14,
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#333",
  },
  name: {
    fontSize: 11,
    color: "#333",
  },
  position: {
    fontSize: 11,
    color: "#333",
  },
});
