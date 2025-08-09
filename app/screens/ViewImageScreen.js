/**
 * ViewImageScreen.js
 *
 * Displays a full-screen image with two overlay icons:
 * - Close icon at the top-left corner
 * - Delete icon at the top-right corner
 *
 * The image is rendered with a 'contain' resize mode, preserving aspect ratio.
 * Background is set to black for better image visibility.
 */

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CHAIR_IMAGE from "../assets/products/chair.jpg";

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
      <Image resizeMode="contain" style={styles.image} source={CHAIR_IMAGE} />
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
    backgroundColor: Colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
