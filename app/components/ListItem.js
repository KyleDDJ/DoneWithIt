import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Colors from "../config/Colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevron = true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightgrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.details_container}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.sub_title} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              color={Colors.grey}
              name="chevron-right"
              size={25}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: Colors.lightyellow,
    alignItems: "center",
  },
  details_container: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: 500,
    color: Colors.darkgreen,
  },
  sub_title: {
    marginTop: 5,
    fontSize: 13,
    color: Colors.darkgreen,
  },
});

export default ListItem;
