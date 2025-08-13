import { useEffect } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";

export default function useNotifications(notificationListener) {
  useEffect(() => {
    registerForPushNotifications();

    const subscription =
      Notifications.addNotificationReceivedListener(notificationListener);

    return () => subscription.remove();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
}
