import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import SplashScreen from "../SplashScreen";
import Services from "../components/Services";
import axios from "axios";
import { getData } from "@/helpers";
import Doctors from "../components/Doctors";
import { BooleanContext } from "@/context/BooleanContext";

export default function Booking() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const { isToken } = useContext(BooleanContext);
  useEffect(() => {
    setIsLoading(true);
    getServicesData();
    getDoctorsData();

  }, []);

  const getServicesData = async () => {
    try {
      await axios
        .get(`http://10.58.158.121:5000/services`, {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setServices(response.data);
            setIsLoading(false);
          }
        })
        .catch((errorDat) => {
          console.log("errorDat", errorDat);
        });
    } catch (error) {
      console.log(":::::", error);
    }
  };

  const getDoctorsByServiceData = async (service) => {
    setIsLoading(true);
    try {
      await axios
        .get(`http://10.58.158.121:5000/doctors/${service.id}`, {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setDoctors(response.data);
            setIsLoading(false);
          }
        })
        .catch((errorDat) => {
          console.log("errorDat", errorDat);
        });
    } catch (error) {
      console.log(":::::", error);
    }
  };

  const getDoctorsData = async () => {
    setIsLoading(true);
    console.log("doctors")

    try {
      await axios
        .get(`http://10.58.158.121:5000/doctors`, {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setDoctors(response.data);
            setIsLoading(false);
          }
        })
        .catch((errorDat) => {
          console.log("errorDat", errorDat);
        });
    } catch (error) {
      console.log(":::::", error);
    }
  };
  if (!isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.navigationContainer}>
          {/* <View>
            <IconSymbol name="left" color="black"  size={30} />
          </View> */}
          <View>
            <Text style={styles.capture}>Choose a specialist</Text>
          </View>
          {/* <View>
            <IconSymbol name="search" color="black" />
          </View> */}
        </View>
        <View style={styles.containerCategory}>
          <Services data={services} check={2} />
        </View>
        {doctors.length > 0 ? (
          <ScrollView style={styles.containerDoctors}>
            <Doctors
              duration="column"
              data={doctors}
              title={
                doctors.length === 1
                  ? `We have ${doctors.length} specialist`
                  : `We have ${doctors.length} specialists`
              }
            />
          </ScrollView>
        ) : (
          <View style={styles.noDoctors}>
            <Text>No available doctors for this service</Text>
            <Text>Choose another one</Text>
          </View>
        )}
      </View>
    );
  }
  if (isLoading) {
    return <SplashScreen />;
  }
}

const styles = StyleSheet.create({
  noDoctors: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    width: 250,
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    // width: '75%'
  },
  linearGradientContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
    marginTop: 10,
  },
  containerDoctors: {
    marginTop: 20,
  },
  containerCategory: {
    marginTop: 2,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginTop: 2,
  },
});
