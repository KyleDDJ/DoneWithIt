import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={30} color="white" />
      </View>
      <View style={styles.labelBox}>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "33%",
  },
  iconContainer: {
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  labelBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
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
