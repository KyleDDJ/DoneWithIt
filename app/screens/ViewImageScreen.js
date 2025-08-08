import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.close_icon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.delete_icon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

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
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
