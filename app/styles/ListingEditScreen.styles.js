import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  add_picture_button: {
    width: 100,
    height: 100,
    backgroundColor: Colors.lightgrey,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  add_picture_container: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default styles;
