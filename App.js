import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { categories } from "./app/config/categories";
import CategoryPickerItem from "./app/components/CategoryPickerItem";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}

//
/* <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />

        <AppTextInput placeholder="First Name" />
        <AppTextInput placeholder="Last Name" />
        <AppTextInput placeholder="Contact Number " />
        <AppTextInput placeholder="Address" />
        <AppTextInput icon="email" placeholder="Email" /> */
