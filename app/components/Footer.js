import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/Colors"; // adjust path if needed

function Footer({ onPlusPress, onChatsPress, onMenusPress }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.option} onPress={onChatsPress}>
        <MaterialCommunityIcons name="chat" size={30} color={colors.grey} />
        <Text style={styles.footer_text}>Chats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={onMenusPress}>
        <MaterialCommunityIcons name="menu" size={30} color={colors.grey} />
        <Text style={styles.footer_text}>Menus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plus_button} onPress={onPlusPress}>
        <MaterialCommunityIcons name="message-plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    backgroundColor: colors.white,
    position: "relative",
  },
  footer_text: {
    fontSize: 13,
    color: colors.grey,
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
    backgroundColor: colors.blue,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default Footer;
