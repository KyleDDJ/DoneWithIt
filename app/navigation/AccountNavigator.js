import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen name="MyAccount" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={ListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
