import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/Colors";
import AppText from "./AppText";

function Card({ title, sub_title, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.sub_title}>{sub_title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  sub_title: {
    color: colors.secondary,
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 7,
  },
});

export default Card;
