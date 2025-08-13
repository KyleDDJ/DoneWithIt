import React, { useEffect, useState, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { jwtDecode } from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const token = await authStorage.getToken();
        if (token) setUser(jwtDecode(token));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      // Hide splash once the UI is actually ready
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null; // Keep splash visible
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

// import React, { useEffect, useState } from "react";
// import { Button, Text } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
// import { jwtDecode } from "jwt-decode";
// // import AppLoading from "expo-app-loading";

// import Screen from "./app/components/Screen";
// import navigationTheme from "./app/navigation/NavigationTheme";
// import AppNavigator from "./app/navigation/AppNavigator";
// import OfflineNotice from "./app/components/OfflineNotice";
// import AuthNavigator from "./app/navigation/AuthNavigation";
// import AuthContext from "./app/auth/context";
// import authStorage from "./app/auth/storage";

// export default function App() {
//   const [user, setUser] = useState();
//   const [isReady, setIsReady] = useState(false);

//   const restoreToken = async () => {
//     const token = await authStorage.getToken();
//     if (!token) return;
//     setUser(jwtDecode(token));
//   };

//   useEffect(() => {
//     restoreToken();
//   }, []);

//   //not working
//   // if (!isReady)
//   //   return (
//   //     <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
//   //   );

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <OfflineNotice />
//         <NavigationContainer theme={navigationTheme}>
//           {user ? <AppNavigator /> : <AuthNavigator />}
//         </NavigationContainer>
//       </GestureHandlerRootView>
//     </AuthContext.Provider>
//   );
// }
