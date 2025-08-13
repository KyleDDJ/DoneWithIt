import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Constants from "expo-constants";
import Colors from "../config/Colors";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
  },
});

export default OfflineNotice;
