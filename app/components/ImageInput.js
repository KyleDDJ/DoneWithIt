// import React, { useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   TouchableWithoutFeedback,
//   Alert,
// } from "react-native";
// import Colors from "../config/Colors";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";

// function ImageInput({ imageUri, onChangeImage }) {
//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
//     if (!granted) {
//       alert("You need to enable permission to access the library.");
//     }
//   };

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaType.Images,
//         quality: 1,
//       });
//       if (!result.canceled) {
//         const uri = result.assets ? result.assets[0].uri : result.uri;
//         onChangeImage(uri);
//       }
//     } catch (error) {
//       console.log("Error reading an image", error);
//     }
//   };

//   const handlePress = () => {
//     if (!imageUri) selectImage();
//     else
//       Alert.alert("Delete", "Are you sure you want to delete this image?", [
//         { text: "Yes", onPress: () => onChangeImage(null) },
//         { text: "No" },
//       ]);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={handlePress}>
//       <View style={styles.container}>
//         {!imageUri && (
//           <MaterialCommunityIcons color={Colors.grey} name="camera" size={40} />
//         )}
//         {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.lightgrey,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 100,
//     overflow: "hidden",
//     width: 100,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default ImageInput;

import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        onChangeImage(uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={Colors.grey} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
