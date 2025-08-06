import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AccountScreen />
    </GestureHandlerRootView>
  );
}
