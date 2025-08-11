import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as ImagePicker from "expo-image-picker";
// import { Image, Alert, Button } from "react-native";
import Screen from "./app/components/Screen";
// import ImageInput from "./app/components/ImageInput";
// import Exercise from "./app/components/Exercise";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListingEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}
