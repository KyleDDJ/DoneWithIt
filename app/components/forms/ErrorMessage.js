import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

function ErrorMessage({ error, visible }) {
  if (!visible | !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: Colors.red },
});

export default ErrorMessage;
