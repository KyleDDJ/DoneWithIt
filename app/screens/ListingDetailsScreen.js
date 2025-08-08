import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/Colors";
import Screen from "../components/Screen";

function ListingDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <Screen style={{ backgroundColor: colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={require("../assets/red.jpg")}
          resizeMode="cover"
        />

        <View style={styles.details_container}>
          <View style={styles.price_row}>
            <AppText style={styles.title}>Stylish Red Jacket</AppText>
            <View style={styles.price_discount}>
              <Text style={styles.price}>$3000</Text>
              <Text style={styles.discount}>35% OFF</Text>
            </View>
          </View>

          <Text style={styles.section_title}>Choose size</Text>
          <View style={styles.size_row}>
            {["S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.size_button,
                  selectedSize === size && styles.size_selected,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.size_text,
                    selectedSize === size && styles.size_text_selected,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.tab_row}>
            <Text style={[styles.tab_text, styles.tab_active]}>Details</Text>
            <Text style={styles.tab_text}>Review</Text>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            iaculis lacinia ligula sit amet maximus. Vestibulum ac tortor magna.
            Ut vulputate, ipsum eu placerat aliquam, risus nisl eleifend lectus,
            eget tempor purus diam ut elit. Morbi sed tellus posuere,
            condimentum justo in, suscipit velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla venenatis pellentesque faucibus.
            Etiam ut posuere nisl, nec tempus metus. Sed tincidunt ultricies
            laoreet. Curabitur pulvinar imperdiet ultrices.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.add_to_cart}>
        <Text style={styles.add_to_cart_text}>Add To Cart</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  details_container: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
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
    color: colors.secondary,
    marginRight: 10,
  },
  discount: {
    fontSize: 14,
    color: colors.red,
    fontWeight: "bold",
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
    borderColor: colors.grey,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  size_selected: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  size_text: {
    color: colors.black,
    fontWeight: "bold",
  },
  size_text_selected: {
    color: colors.white,
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
    color: colors.grey,
  },
  tab_active: {
    color: colors.black,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    paddingBottom: 2,
  },
  description: {
    fontSize: 14,
    color: colors.grey,
    lineHeight: 20,
    marginTop: 10,
  },
  add_to_cart: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
  },
  add_to_cart_text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ListingDetailsScreen;
