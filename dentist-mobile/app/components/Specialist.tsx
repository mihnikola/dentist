import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { LinearGradient } from "expo-linear-gradient";
import profiImg from "../../assets/images/profileImg.png";
import { ROLES_DATA, DATE_DATA, TIMES_DATA } from "@/constants";
import CardDateItem from "./CardDateItem";
import CardTimeItem from "./CardTimeItem";
import MessageBox from "./MessageBox";
import axios from "axios";
import { BooleanContext } from "@/context/BooleanContext";
import CalendarReservation from "./CalendarReservation";
// import { useNavigation } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Specialist = () => {
  const [submitValue, setSubmitValue] = useState(false);
  const { isToken, doctorId } = useContext(BooleanContext);
  const [doctor, setDoctor] = useState(null);
  const navigation = useNavigation();
  const submitHandler = () => {
    console.log("Submit button pressed");
    setSubmitValue(true);
  };
  useEffect(() => {
    console.log("Component mounted");
    getDoctorById();
  }, []);

  const getDoctorById = async () => {
    try {
      await axios
        .get(`http://10.58.158.121:5000/doctors/${doctorId}`, {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            setDoctor(response.data);
          }
        });
    } catch (error) {}
  };

  // const doctor = {
  //   id: 1,
  //   name: "Petrova Olga Viktorovna",
  //   position: "Dentist, Implantologist",
  //   image: profiImg,
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magninostrum cum quasi officiis consequuntur maiores ratione recusandae.         Officia, eum fuga, eveniet fugiat beatae aperiam ...",
  // };

  if (!submitValue) {
    return (
      <View style={styles.container}>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconSymbol name="left" size={34} />
          </TouchableOpacity>
          <View>
            <Text style={styles.profile}>Specialist page</Text>
          </View>
        </View>
        <LinearGradient
          colors={["#BACAFE", "#9FB7FC", "#7F9BFF"]}
          style={styles.headerContainer}
        >
          <View style={styles.info}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{doctor?.name}</Text>
            </View>
            <View style={styles.positionContainer}>
              <Text style={styles.position}>{doctor?.position}</Text>
            </View>
          </View>
          <LinearGradient
            colors={["#7A9BFC", "#9FB7FC", "#BACAFE"]}
            style={styles.specialistImgContent}
          >
            <LinearGradient
              colors={["#9FB7FC", "#7A9BFC", "#BACAFE"]}
              style={styles.specialistImgContainer}
            >
              <Image
                source={{ uri: doctor?.image }}
                style={styles.specialistImg}
              />
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
        <View
          style={{ display: "flex", flexDirection: "row", gap: 23, padding: 5 }}
        >
          {ROLES_DATA.map((item) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  alignItems: "center",
                }}
                key={item.id}
              >
                <LinearGradient
                  style={styles.containerImage}
                  colors={["#FAFBFE", "#E2EAFC", "#F0F1FE"]}
                >
                  <Image source={item.icon} style={styles.icons} />
                </LinearGradient>
                <View style={styles.infoContainer}>
                  <View style={styles.cardInfoContainer}>
                    <Text style={styles.text}>{item.vote}</Text>
                    <Text style={styles.textTitle}>{item.title}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 15, textAlign: "justify" }}>
            {doctor?.description}
          </Text>
        </View>

        <CalendarReservation />

        <TouchableOpacity style={styles.btnSubmit} onPress={submitHandler}>
          <Text style={styles.btnText}>Book an appointment</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (submitValue) {
    return <MessageBox />;
  }
};

const styles = StyleSheet.create({
  calendarView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
  mainCalendarView: {
    flex: 1,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  btnSubmit: {
    backgroundColor: "#84aaff",
    padding: 20,
    borderRadius: 20,
    margin: 15,
    textAlign: "center",
  },
  containerImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    paddingTop: 15,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardInfoContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainer: {
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    padding: 15,
    width: 80,
  },
  icons: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },

  text: {
    fontSize: 20,
    fontWeight: "800",
    color: "black",
  },
  textTitle: {
    fontSize: 12,
    color: "gray",
  },
  titleContainer: {
    width: 150,
  },
  positionContainer: {
    width: 180,
  },
  info: {
    paddingTop: 15,
    height: 120,
    flexDirection: "column",
  },
  specialistImgContent: {
    position: "absolute",
    top: 28,
    left: 240,
    width: 180,
    height: 180,
    borderRadius: 100,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
  specialistImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  specialistImgContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  position: {
    fontSize: 16,
    color: "#808080",
  },
  container: {
    flex: 1,
  },
  navigationContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  profile: {
    fontSize: 20,
    fontWeight: "800",
  },
  headerContainer: {
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Specialist;
