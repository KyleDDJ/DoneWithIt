import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, Image, StyleSheet, View, Alert } from "react-native";
import Screen from "./Screen";
import Colors from "../config/Colors";

function Exercise() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const showAlert = () => {
    Alert.alert("Delete Image", "Are you sure you want to delete this image?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => setImageUri(null),
      },
    ]);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <View style={styles.row}>
          {imageUri && (
            <TouchableOpacity onPress={showAlert}>
              <Image source={{ uri: imageUri }} style={styles.image} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={selectImage} style={styles.imageContainer}>
            <MaterialCommunityIcons
              name="camera"
              size={40}
              color={Colors.medium}
            />
          </TouchableOpacity>
        </View>
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
  },
  imageContainer: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 20,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
});

export default Exercise;
