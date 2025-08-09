/**
 * WelcomeScreen.js
 *
 * The landing screen of the app featuring:
 * - A blurred background image.
 * - Centered logo and tagline near the top.
 * - Two buttons ("Login" and "Register") anchored at the bottom.
 */

import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppButton from "../components/AppButton";
import BACKGROUND_IMAGE from "../assets/images/background.jpg";
import LOGO_IMAGE from "../assets/logos/logo-red.png";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={BACKGROUND_IMAGE}
    >
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={LOGO_IMAGE} />

        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.button_container}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button_container: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo_container: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
