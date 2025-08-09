/**
 * LoginScreen.js
 *
 * This screen provides a user interface for users to log into the app.
 * It includes:
 * - Form inputs for email and password with validation using Yup.
 * - Toggle to show/hide password visibility.
 * - Links for "Forgot Password?" and "Register" actions.
 * - Social login buttons for Google, QQ, and Facebook.
 *
 * Validation:
 * - Email is required and must be a valid email address.
 * - Password is required with a minimum length of 4 characters.
 *
 * Uses custom form components (AppForm, AppFormField, SubmitButton) and a
 * shared Screen layout component.
 */
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Colors from "../config/Colors";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

import LOGO_IMAGE from "../assets/logos/logo-red.png";

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const handleForgotPassword = () => {
    console.log("Forgot Password tapped");
  };

  const handleRegister = () => {
    console.log("Register tapped");
  };
  const handleSocialLogin = (platform) => console.log(`Login with ${platform}`);

  const socialLogins = [
    { name: "google", color: "#DB4437", iconSet: AntDesign },
    { name: "qq", color: "#12B7F5", iconSet: FontAwesome },
    { name: "facebook", color: "#4267B2", iconSet: FontAwesome },
  ];

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={LOGO_IMAGE} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry={!showPassword}
          placeholder="Password"
          rightIcon={showPassword ? "eye-off" : "eye"}
          onRightIconPress={() => setShowPassword(!showPassword)}
        />
        <SubmitButton title="Login" />
        <View style={styles.link_container}>
          <TouchableWithoutFeedback onPress={handleForgotPassword}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleRegister}>
            <Text style={styles.link}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.or_container}>
          <Text style={styles.text}>OR</Text>
        </View>
        <View style={styles.social_login_container}>
          {socialLogins.map(({ name, color, iconSet: Icon }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSocialLogin(name)}
              style={[styles.social_button, { backgroundColor: color }]}
            >
              <Icon name={name} size={20} color="white" />
            </TouchableOpacity>
          ))}
        </View>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  link_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  link: {
    color: Colors.primary,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 10,
    color: Colors.grey,
  },
  or_container: {
    backgroundColor: Colors.lightgrey,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  social_login_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 15,
  },
  social_button: {
    width: 100,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
