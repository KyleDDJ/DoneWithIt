import React from "react";
import { View, Button, Alert, Keyboard } from "react-native";
import { Formik } from "formik";
import AppTextInput from "../components/AppTextInput";
import messagesApi from "../api/messages";
import * as Notifications from "expo-notifications";
import AppButton from "./AppButton";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message.");
    }

    resetForm();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent.",
      },
      trigger: null,
    });
  };

  return (
    <Formik initialValues={{ message: "" }} onSubmit={handleSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <AppTextInput
            placeholder="Message..."
            onChangeText={handleChange("message")}
            value={values.message}
          />
          <AppButton title="Contact Seller" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

export default ContactSellerForm;
