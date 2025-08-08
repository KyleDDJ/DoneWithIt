import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/Styles";

function AppTextInput({
  icon,
  width = "100%",
  rightIcon,
  onRightIconPress,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyle.colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={defaultStyle.colors.medium}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.right_icon_container}
        >
          <MaterialCommunityIcons
            name={rightIcon}
            size={25}
            color={defaultStyle.colors.grey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12,
    color: defaultStyle.colors.dark,
  },
  right_icon_container: {
    marginLeft: 10,
  },
});

export default AppTextInput;
