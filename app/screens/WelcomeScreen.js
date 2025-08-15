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
import stylesWelcome from "../styles/WelcomeScreen.styles";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={stylesWelcome.background}
      source={BACKGROUND_IMAGE}
    >
      <View style={stylesWelcome.logo_container}>
        <Image style={stylesWelcome.logo} source={LOGO_IMAGE} />

        <Text style={stylesWelcome.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={stylesWelcome.button_container}>
        <AppButton
          title="Login"
          color="darkgreen"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          color="lightyellow"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
