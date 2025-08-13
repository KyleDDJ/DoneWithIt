import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
  footer: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    backgroundColor: Colors.white,
    position: "relative",
  },
  footer_text: {
    fontSize: 13,
    color: Colors.grey,
    marginTop: 1,
  },
  option: {
    flexDirection: "column",
    alignItems: "center",
  },
  plus_button: {
    position: "absolute",
    top: -80,
    right: 20,
    backgroundColor: Colors.blue,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default styles;
