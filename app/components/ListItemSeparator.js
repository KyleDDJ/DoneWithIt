import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    padding: 2,
    backgroundColor: Colors.darkgreen,
  },
});

export default ListItemSeparator;
