import React from "react";
import { Button, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>TweetDetails{route.params.id}</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();

// const FeedNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator screenOptions={{ headerShown: false }}>
//     <Tab.Screen name="Feed" component={FeedNavigator} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // demo();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
