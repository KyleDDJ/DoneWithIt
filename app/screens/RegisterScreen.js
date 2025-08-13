import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Colors from "../config/Colors";
import Screen from "../components/Screen";
import LOGO_IMAGE from "../assets/logos/logo-red.png";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import stylesLogin from "../styles/LoginScreen.styles";
import stylesRegister from "../styles/RegisterScreen.styles";

/**
 * Validation schema for the registration form using Yup.
 *
 * Fields:
 * - name: Required string, labeled "Full Name"
 * - email: Required, must be a valid email format
 * - password: Required, at least 4 characters
 */
const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

/**
 * RegisterScreen Component
 *
 * Allows a new user to create an account.
 *
 * Features:
 * - Logo display at the top
 * - Form with fields for full name, email, and password
 * - Password visibility toggle
 * - Redirect to Login screen if the user already has an account
 *
 * Uses:
 * - Formik via custom AppForm and AppFormField components
 * - Yup validation schema
 *
 * @param {object} navigation - React Navigation prop for screen navigation
 * @returns {JSX.Element} Registration screen
 */
function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Toggles password visibility in the password field.
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  /**
   * Handles form submission.
   * Currently logs user input and redirects to the Login screen.
   *
   * @param {object} values - Form values containing name, email, and password
   */
  const handleRegister = (values) => {
    console.log("Registering:", values);
    navigation.navigate("Login");
  };

  return (
    <Screen style={stylesLogin.container}>
      {/* App Logo */}
      <Image style={stylesLogin.logo} source={LOGO_IMAGE} />

      {/* Page Title */}
      <Text style={stylesRegister.title}>Create an Account</Text>

      {/* Registration Form */}
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={VALIDATION_SCHEMA}
      >
        {/* Full Name Field */}
        <AppFormField
          name="name"
          placeholder="Full Name"
          icon="account"
          autoCapitalize="words"
        />

        {/* Email Field */}
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password Field with Toggle */}
        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry={!showPassword}
          rightIcon={showPassword ? "eye-off" : "eye"}
          onRightIconPress={togglePasswordVisibility}
          autoCapitalize="none"
        />

        {/* Submit Button */}
        <SubmitButton title="Register" />
      </AppForm>

      {/* Link to Login Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={stylesRegister.loginLink}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}

export default RegisterScreen;
