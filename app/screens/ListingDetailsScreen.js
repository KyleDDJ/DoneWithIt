import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

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

        <View style={styles.detailsContainer}>
          <View style={styles.priceRow}>
            <AppText style={styles.title}>Stylish Red Jacket</AppText>
            <View style={styles.priceDiscount}>
              <Text style={styles.price}>$3000</Text>
              <Text style={styles.discount}>35% OFF</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Choose size</Text>
          <View style={styles.sizeRow}>
            {["S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeSelected,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextSelected,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.tabRow}>
            <Text style={[styles.tabText, styles.tabActive]}>Details</Text>
            <Text style={styles.tabText}>Review</Text>
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

      <TouchableOpacity style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  priceDiscount: {
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
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  sizeRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sizeSelected: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  sizeText: {
    color: colors.black,
    fontWeight: "bold",
  },
  sizeTextSelected: {
    color: colors.white,
  },
  tabRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },
  tabText: {
    marginRight: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: colors.grey,
  },
  tabActive: {
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
  addToCart: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
  },
  addToCartText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ListingDetailsScreen;
