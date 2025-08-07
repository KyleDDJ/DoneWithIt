// import React from "react";
// import { View, TextInput, StyleSheet } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import defaultStyle from "../config/styles";

// function AppTextInput({ icon, ...otherProps }) {
//   return (
//     <View style={styles.container}>
//       {icon && (
//         <MaterialCommunityIcons
//           name={icon}
//           size={25}
//           color={defaultStyle.colors.grey}
//           style={styles.icon}
//         />
//       )}
//       <TextInput style={defaultStyle.text} {...otherProps} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyle.colors.lightgrey,
//     borderRadius: 25,
//     flexDirection: "row",
//     width: "100%",
//     padding: 15,
//     marginVertical: 5,
//   },
//   icon: {
//     marginRight: 10,
//     alignSelf: "center",
//   },
// });

// export default AppTextInput;
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";

function AppTextInput({ icon, rightIcon, onRightIconPress, ...otherProps }) {
  return (
    <View style={styles.container}>
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
          style={styles.rightIconContainer}
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
    alignItems: "center", // ✅ ensures vertical alignment
    width: "100%",
    paddingHorizontal: 15,
    marginVertical: 5,
  },

  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12, // ✅ add vertical padding to balance text height
    color: defaultStyle.colors.dark,
  },
  rightIconContainer: {
    marginLeft: 10,
  },
});

export default AppTextInput;
