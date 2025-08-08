import { Platform } from "react-native";
import colors from "./Colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 17,
    fontFamilyy: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
