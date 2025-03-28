import { IconSymbol } from "@/components/ui/IconSymbol";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppointmentsItem from "../components/AppointmentsItem";
import { getData } from "@/helpers";
import axios from "axios";
import SplashScreen from "../SplashScreen";

export default function TabThreeScreen() {
  const [activeTab, setActiveTab] = useState("news");
  const [appointments, setAppointments] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      getData().then((res) => {
        
        if (res) {
          getAppointments(res);
        }
      });
    }, 3000);
  }, []);

  const getAppointments = async (token) => {
    try {
      await axios
        .get(`http://10.58.158.121:5000/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setAppointments(response.data);
            setIsLoader(false);
          }
        })
        .catch((errorDat) => {
          console.log("errorDat", errorDat);
        });
    } catch (error) {
      console.log(":::::", error);
    }
  };

  if (!isLoader) {
    return (
      <View style={styles.container}>
        <View style={styles.navigationContainer}>
          {/* <View>
            <IconSymbol name="left" color="black" size={30} />
          </View> */}
          <View>
            <Text style={styles.profile}>My Appointments</Text>
          </View>
          {/* <View>
            <IconSymbol name="search" color="black" />
          </View> */}
        </View>
        <View style={styles.grayLine} />

        {/* Tab Navigation */}
        <View style={styles.tabs}>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === "news" && styles.activeTab]}
            onPress={() => handleTabClick("news")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "news" && styles.activeText,
              ]}
            >
              News
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
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          {appointments.map((item) => {
            return <AppointmentsItem key={item.id} item={item} />;
          })}
        </View>
      </View>
    );
  }
  if (isLoader) {
    return <SplashScreen />;
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    gap: 10,
  },
  grayLine: {
    height: 2,
    backgroundColor: "#ccc",
    marginTop: 1,
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

  },
  profile: {
    fontSize: 20,
    fontWeight: "800",
    
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
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
});
