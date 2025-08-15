import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Colors from "../config/Colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        style={styles.animation}
        loop
        autoPlay
        source={require("../assets/animations/loading2.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkgreen,
    opacity: 0.8,
    zIndex: 1,
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default ActivityIndicator;
