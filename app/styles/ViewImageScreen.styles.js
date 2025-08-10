import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
  close_icon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete_icon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
