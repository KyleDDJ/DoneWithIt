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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CHAIR_IMAGE from "../assets/products/chair.jpg";
import stylesViewImage from "../styles/ViewImageScreen.styles";

function ViewImageScreen(props) {
  return (
    <View style={stylesViewImage.container}>
      <View style={stylesViewImage.close_icon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={stylesViewImage.delete_icon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={stylesViewImage.image}
        source={CHAIR_IMAGE}
      />
    </View>
  );
}

export default ViewImageScreen;
