import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import LOGO_IMAGE from "../assets/logos/logo-red.png";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import stylesLogin from "../styles/LoginScreen.styles";
import stylesRegister from "../styles/RegisterScreen.styles";
import usersApi from "../api/users";
import useAuth from "../hooks/useAuth";
import authApi from "../api/auth";
import useApis from "../hooks/useApis";
import ActivityIndicator from "../components/ActivityIndicator";

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
  const registerApi = useApis(usersApi.register);
  const loginApi = useApis(authApi.login);

  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={stylesLogin.container}>
        <Image style={stylesLogin.logo} source={LOGO_IMAGE} />
        <Text style={stylesRegister.title}>Create an Account</Text>
        {error && (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        )}
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
        >
          <AppFormField
            name="name"
            placeholder="Full Name"
            icon="account"
            autoCapitalize="words"
          />
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            icon="lock"
            secureTextEntry={!showPassword}
            rightIcon={showPassword ? "eye-off" : "eye"}
            onRightIconPress={togglePasswordVisibility}
            autoCapitalize="none"
          />
          <SubmitButton color="darkgreen" title="Register" />
        </AppForm>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={stylesRegister.loginLink}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Screen>
    </>
  );
}

export default RegisterScreen;
