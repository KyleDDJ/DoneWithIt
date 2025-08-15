import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import logger from "../utility/logger";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await AsyncStorage.setItem(key, authToken);
  } catch (error) {
    logger.log("Error storing he auth token", error);
  }
};

const getToken = async () => {
  try {
    return (authToken = await AsyncStorage.getItem(key));
  } catch (error) {
    logger.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await AsyncStorage.deleteItem(key);
  } catch (error) {
    logger.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };
