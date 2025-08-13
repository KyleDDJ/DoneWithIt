/**
 * LoginScreen.js
 *
 * This screen provides a user interface for users to log into the app.
 * It includes:
 * - Form inputs for email and password with validation using Yup.
 * - Toggle to show/hide password visibility.
 * - Links for "Forgot Password?" actions.
 * - Social login buttons for Google, QQ, and Facebook.
 *
 * Validation:
 * - Email is required and must be a valid email address.
 * - Password is required with a minimum length of 4 characters.
 *
 * Uses custom form components (AppForm, AppFormField, SubmitButton) and a
 * shared Screen layout component.
 */
import React, { useContext, useState } from "react";
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
import LOGO_IMAGE from "../assets/logos/logo-red.png";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import { jwtDecode } from "jwt-decode";

import authApi from "../api/auth";
import stylesLogin from "../styles/LoginScreen.styles";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleForgotPassword = () => {
    console.log("Forgot Password tapped");
  };

  const socialLogins = [
    { name: "google", color: "#DB4437", iconSet: AntDesign },
    { name: "qq", color: "#12B7F5", iconSet: FontAwesome },
    { name: "facebook", color: "#4267B2", iconSet: FontAwesome },
  ];

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };
  return (
    <Screen style={stylesLogin.container}>
      <Image style={stylesLogin.logo} source={LOGO_IMAGE} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
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
        <View style={stylesLogin.link_container}>
          <TouchableWithoutFeedback onPress={handleForgotPassword}>
            <Text style={stylesLogin.link}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={stylesLogin.or_container}>
          <Text style={stylesLogin.text}>OR</Text>
        </View>
        <View style={stylesLogin.social_login_container}>
          {socialLogins.map(({ name, color, iconSet: Icon }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSocialLogin(name)}
              style={[stylesLogin.social_button, { backgroundColor: color }]}
            >
              <Icon name={name} size={20} color="white" />
            </TouchableOpacity>
          ))}
        </View>
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
