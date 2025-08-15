import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";
import { Image } from "react-native-expo-image-cache";

function Card({ title, sub_title, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.sub_title}>{sub_title}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.darkgreen,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 180,
  },
  sub_title: {
    color: Colors.lightgrey,
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    color: Colors.lightyellow,
    marginBottom: 7,
  },
});

export default Card;
