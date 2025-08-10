import React from "react";
import { View, Image, TouchableOpacity, ScrollView, Text } from "react-native";
import styles from "../styles/ListingDetailsScreen.styles";
import AppText from "../components/AppText";
import COLORS from "../config/Colors";
import Screen from "../components/Screen";
import useSelectedSize from "../hooks/useSelectedSize";
import RED_JACKET_IMAGE from "../assets/products/red.jpg";

function ListingDetailsScreen() {
  const { selectedSize, setSelectedSize } = useSelectedSize();

  return (
    <Screen style={{ backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={RED_JACKET_IMAGE}
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
            eget tempor purus diam ut elit.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.add_to_cart}>
        <Text style={styles.add_to_cart_text}>Add To Cart</Text>
      </TouchableOpacity>
    </Screen>
  );
}

export default ListingDetailsScreen;
