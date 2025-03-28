import { StyleSheet, ScrollView, View, Text } from "react-native";

import Doctors from "../components/Doctors";
import Appointments from "../components/Appointments";
import { useContext, useEffect, useState } from "react";
import { getData } from "@/helpers";
import axios from "axios";
import Categories from "./Categories";
import SplashScreen from "../SplashScreen";
import { BooleanContext } from "@/context/BooleanContext";
import Services from "./Services";

export default function HomeScreen() {
  const [isLoader, setIsLoader] = useState(true);
  const [homeData, setHomeData] = useState(null);
  const { isToken } = useContext(BooleanContext);

  useEffect(() => {
    setTimeout(() => {
      getAllHomeData();
    }, 2000);
  }, []);

  const getAllHomeData = async () => {
    try {
      await axios
        .get(`http://10.58.158.121:5000/home`, {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setHomeData(response.data);
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

  if (isLoader) {
    return <SplashScreen />;
  }
  if (homeData) {
    const { categories, appointments, services, doctors } = homeData;
    if (!isLoader) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.containerCapture}>
            <Text style={styles.capture}>Home Page</Text>
          </View>
          <View style={styles.grayLine} />
          <View style={styles.containerCategory}>
            <Categories data={categories} />
          </View>
          <View style={styles.containerAppoint}>
            <Appointments data={appointments} />
          </View>
          <View style={styles.containerData}>
            <Services data={services} check={1} />
          </View>
          <View style={styles.containerDoctors}>
            <Doctors duration="row" data={doctors} title="Our doctors" />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerDoctors: {
    backgroundColor: "#f9f9f9",
  },
  containerCategory: {
    marginTop: 5,
    backgroundColor: "#f9f9f9",
  },
  containerAppoint: {
    backgroundColor: "#f9f9f9",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  capture: {
    fontSize: 20,
    fontWeight: "800",
  },
  containerData: {
    padding: 10,
  },
  grayLine: {
    height: 2,
    backgroundColor: "#ccc",
    marginTop: 1,
  },
  containerCapture: {
    backgroundColor: "#f9f9f9",
    alignSelf: "center",
    padding: 10,
  },
});
