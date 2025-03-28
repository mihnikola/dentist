import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default function Example() {
  const swiper = useRef();
  const contentSwiper = useRef();
  const [week, setWeek] = useState(0);

  const [value, setValue] = useState(new Date());

  const year = moment(value).format("YYYY");
  const month = moment(value).format("MMMM"); // Full month name

  // Define available times for each day (mock data)
  const [timeDataValue, setTimeDataValue] = useState(null);
  const availableTimes = {
    "2025-03-26": [
      { id: 1, time: "08:00", available: true },
      { id: 2, time: "09:00", available: true },
      { id: 3, time: "10:00", available: true },
      { id: 4, time: "11:00", available: true },
      { id: 5, time: "12:00", available: true },
      { id: 6, time: "13:00", available: true },
      { id: 7, time: "14:00", available: true },
      { id: 8, time: "15:00", available: true },
    ],
    "2025-03-29": [
      { id: 1, time: "08:00", available: true },
      { id: 2, time: "09:00", available: true },
      { id: 3, time: "10:00", available: true },
      { id: 4, time: "11:00", available: true },
      { id: 5, time: "12:00", available: true },
      { id: 6, time: "13:00", available: true },
      { id: 7, time: "14:00", available: true },
      { id: 8, time: "15:00", available: true },
    ],
    "2025-03-30": [
      { id: 1, time: "08:00", available: true },
      { id: 2, time: "09:00", available: true },
      { id: 3, time: "10:00", available: true },
      { id: 4, time: "11:00", available: true },
      { id: 5, time: "12:00", available: true },
      { id: 6, time: "13:00", available: true },
      { id: 7, time: "14:00", available: true },
      { id: 8, time: "15:00", available: true },
    ],
    "2025-03-28": [
      { id: 1, time: "08:00", available: true },
      { id: 2, time: "09:00", available: true },
      { id: 3, time: "10:00", available: true },
      { id: 4, time: "11:00", available: true },
      { id: 5, time: "12:00", available: true },
      { id: 6, time: "13:00", available: true },
      { id: 7, time: "14:00", available: true },
      { id: 8, time: "15:00", available: true },
    ],
  };

  // Get the available times based on the selected day
  const getAvailableTimes = (date) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    return availableTimes[dateString] || [];
  };

  const handleSelectionTime = (data) => {
    const selectedDate = timeDataValue;
    if(selectedDate?.id === data.id){
        setTimeDataValue(null);
    }else{
        setTimeDataValue(data);
    }

    // const availableTimes = getAvailableTimes(selectedDate);
    // const selectedTimeIndex = availableTimes.indexOf(selectedTime);
    // if (selectedTimeIndex !== -1) {
    //   availableTimes.splice(selectedTimeIndex, 1);
    // }
  };

  /**
   * Create an array of weekdays for previous, current, and next weeks.
   */
  const weeks = React.useMemo(() => {
    const start = moment().add(week, "weeks").startOf("week");

    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, "week").add(index, "day");

        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  /**
   * Create an array of days for yesterday, today, and tomorrow.
   */
  const days = React.useMemo(() => {
    return [
      moment(value).subtract(1, "day").toDate(),
      value,
      moment(value).add(1, "day").toDate(),
    ];
  }, [value]);

  // State to hold the available times for the selected day
  const [times, setTimes] = useState(getAvailableTimes(value));

  // Handle day selection and update available times
  const handleDaySelection = (selectedDate) => {
    setValue(selectedDate);
    const availableTimesForSelectedDay = getAvailableTimes(selectedDate);
    setTimes(availableTimesForSelectedDay);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>
        {month} {year}
      </Text>
      <View style={styles.container}>
        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={(ind) => {
              if (ind === 1) {
                return;
              }

              const index = ind - 1;
              setValue(moment(value).add(index, "week").toDate());

              setTimeout(() => {
                setWeek(week + index);
                swiper.current.scrollTo(1, false);
              }, 10);

              handleDaySelection(moment(value).add(index, "week").toDate());
            }}
          >
            {weeks.map((dates, index) => (
              <View style={styles.itemRow} key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => handleDaySelection(item.date)}
                    >
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: "#84aaff",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: "#fff" },
                          ]}
                        >
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: "#fff" },
                          ]}
                        >
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <Swiper
          index={0}
          loop={false}
          showsPagination={false}
          scrollEnabled={false}
        >
          {days.map((day, index) => {
            return (
              <View
                key={index}
                style={{ flexDirection: "row", paddingRight: 20 }}
              >
                {/* Display available times for the selected day */}
                {times.length > 0 ? (
                  <View style={styles.availableTimesContainer}>
                    {times.map((time, idx) => (
                      <TouchableOpacity
                        key={time.id}
                        onPress={() => handleSelectionTime(time)}
                      >
                        <Text
                          key={idx}
                          style={[
                            styles.availableTime,
                            timeDataValue?.id === time.id && {
                              color: "#fff",
                              backgroundColor: "#84aaff",
                            },
                          ]}
                        >
                          {time.time}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : (
                  <View style={styles.noAvailableTimes}>
                    <Text style={styles.noAvailableTimesText}>
                      No available times
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </Swiper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noAvailableTimes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  noAvailableTimesText: {
    fontSize: 22,
    color: "#333",
    fontWeight: "500",
  },
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#999999",
  },
  availableTimesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  availableTime: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
  },
  footer: {
    paddingHorizontal: 16,
  },
  /** Item */
  item: {
    flex: 1,
    height: 60,
    marginHorizontal: 2,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e3e3e3",
    flexDirection: "column",
    alignItems: "center",
  },
  itemRow: {
    width: width,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: "500",
    color: "#737373",
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
});
