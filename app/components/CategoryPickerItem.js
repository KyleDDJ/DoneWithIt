import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Colors from "../config/Colors";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.icon_container,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={30} color="white" />
      </View>
      <View style={styles.label_box}>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "33%",
  },
  icon_container: {
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  label_box: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CategoryPickerItem;
