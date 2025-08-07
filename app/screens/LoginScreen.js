// import React, { useState } from "react";
// import { Image, StyleSheet } from "react-native";

// import Screen from "../components/Screen";
// import AppTextInput from "../components/AppTextInput";
// import AppButton from "../components/AppButton";

// function LoginScreen(props) {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <Screen style={styles.container}>
//       <Image style={styles.logo} source={require("../assets/logo-red.png")} />
//       <AppTextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         icon="email"
//         keyboardType="email-address"
//         onChangeText={(text) => setEmail(text)}
//         placeholder="Email"
//       />

//       <AppTextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         icon="lock"
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//         placeholder="Password"
//       />
//       <AppButton title="login" onPress={() => console.log(email, password)} />
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 50,
//   },
// });

// export default LoginScreen;

//chatgpt / reference
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";

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

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              secureTextEntry={!showPassword}
              placeholder="Password"
              rightIcon={showPassword ? "eye-off" : "eye"}
              onRightIconPress={() => setShowPassword(!showPassword)}
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>

            <AppButton title="Login" onPress={handleSubmit} />
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Forgot Password</Text>
              </TouchableOpacity>
              <Text style={styles.separator}>|</Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.link}>Register</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
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
    marginTop: 100,
    marginBottom: 150,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  link: {
    textDecorationLine: "underline",
    color: colors.primary,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  separator: {
    color: "#888",
    fontSize: 16,
    lineHeight: 15,
  },
});

export default LoginScreen;
