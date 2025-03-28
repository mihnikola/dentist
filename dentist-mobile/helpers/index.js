import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("token", jsonValue);
  } catch (e) {
    // saving error
  }
};


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("token");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
    // remove error
  }
};

export const prettyDateFormat = (dateValue) => {
  const date = new Date(dateValue);
  const options = {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",

  };
  return date.toLocaleDateString("en-GB", options);
};

export const storeInitialToken = async () => {
  try {
    await AsyncStorage.setItem("initialToken", "1");
  } catch (e) {
    // saving error
  }
};

export const getInitialToken = async () => {
  try {
    return await AsyncStorage.getItem("initialToken");
  } catch (e) {
    // geting error
  }
};
