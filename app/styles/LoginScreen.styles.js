import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

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

export default styles;
