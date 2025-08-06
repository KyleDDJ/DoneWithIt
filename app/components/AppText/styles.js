import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    // color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default styles;
