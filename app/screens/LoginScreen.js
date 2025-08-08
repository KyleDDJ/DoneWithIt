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
import colors from "../config/colors";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
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
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
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
        <View style={styles.linkContainer}>
          <TouchableWithoutFeedback onPress={handleForgotPassword}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleRegister}>
            <Text style={styles.link}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.orContainer}>
          <Text style={styles.text}>OR</Text>
        </View>
        <View style={styles.socialLoginContainer}>
          {socialLogins.map(({ name, color, iconSet: Icon }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSocialLogin(name)}
              style={[styles.socialButton, { backgroundColor: color }]}
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
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  link: {
    color: colors.primary,
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
    color: colors.grey,
  },
  orContainer: {
    backgroundColor: colors.lightgrey,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 15,
  },
  socialButton: {
    width: 100,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
