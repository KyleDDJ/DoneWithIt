import React, { useState } from "react";
import { View, Alert, Keyboard } from "react-native";
import { Formik } from "formik";
import AppTextInput from "../components/AppTextInput";
import messagesApi from "../api/messages";
import * as Notifications from "expo-notifications";
import AppButton from "./AppButton";
import { ErrorMessage } from "./forms";

function ContactSellerForm({ listing }) {
  const [error, setError] = useState("");
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    if (!result.ok) {
      console.log("Error", result);
      setError("Message should not be empty");
      return;
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
        <View style={{ padding: 15 }}>
          <AppTextInput
            placeholder="Message..."
            onChangeText={handleChange("message")}
            value={values.message}
          />
          <ErrorMessage error={error} visible={true} />
          <AppButton
            color="darkgreen"
            title="Contact Seller"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
}

export default ContactSellerForm;
