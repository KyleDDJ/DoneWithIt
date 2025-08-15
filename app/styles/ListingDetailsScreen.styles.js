import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignContent: "center",
    alignSelf: "center",
  },
  details_container: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: Colors.darkgreen,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.lightyellow,
  },
  price_row: {
    flexDirection: "column",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.lightgrey,
    marginRight: 10,
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
    color: Colors.lightgrey,
  },
  tab_active: {
    color: Colors.lightyellow,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightyellow,
    paddingBottom: 2,
  },
  description: {
    fontSize: 14,
    color: Colors.lightgrey,
    lineHeight: 20,
    marginTop: 10,
  },
});

export default styles;
