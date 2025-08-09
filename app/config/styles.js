import { Platform } from "react-native";
import COLORS from "./Colors";

export default {
  colors: COLORS,
  text: {
    color: COLORS.dark,
    fontSize: 17,
    fontFamilyy: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
