import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  details_container: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
  },
  price_row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  price_discount: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    marginRight: 10,
  },
  section_title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  size_row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  size_button: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  size_selected: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  size_text: {
    color: Colors.black,
    fontWeight: "bold",
  },
  size_text_selected: {
    color: Colors.white,
  },
  tab_row: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },
  tab_text: {
    marginRight: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.grey,
  },
  tab_active: {
    color: Colors.black,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    paddingBottom: 2,
  },
  description: {
    fontSize: 14,
    color: Colors.grey,
    lineHeight: 20,
    marginTop: 10,
  },
});

export default styles;
