import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import Colors from "../config/Colors";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
      cardStyle: { backgroundColor: Colors.darkgreen },
      headerTintColor: Colors.lightyellow,
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <Stack.Screen name="Account Settings" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={ListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
