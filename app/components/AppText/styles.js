import { StyleSheet, Platform } from "react-native";
import colors from "../../config/Colors";

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default styles;
