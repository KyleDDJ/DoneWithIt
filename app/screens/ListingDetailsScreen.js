import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import stylesDetails from "../styles/ListingDetailsScreen.styles";
import AppText from "../components/AppText";
import Colors from "../config/Colors";
import Screen from "../components/Screen";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <Screen style={{ backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={stylesDetails.image}
          tint="light"
          preview={{ uri: listing.images[0].thumbnailUrl }}
          // source={{ uri: listing.images[0].url }}
          uri={listing.images[0].url}
          resizeMode="cover"
        />

        <View style={stylesDetails.details_container}>
          <View style={stylesDetails.price_row}>
            <AppText style={stylesDetails.title}>{listing.title}</AppText>
            <View style={stylesDetails.price_discount}>
              <Text style={stylesDetails.price}>${listing.price}</Text>
            </View>
          </View>

          {/* *userInfo here  in The ACCOUNT* */}

          <View style={stylesDetails.tab_row}>
            <Text style={[stylesDetails.tab_text, stylesDetails.tab_active]}>
              Details
            </Text>
            <Text style={stylesDetails.tab_text}>Review</Text>
          </View>

          <Text style={stylesDetails.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            iaculis lacinia ligula sit amet maximus. Vestibulum ac tortor magna.
            Ut vulputate, ipsum eu placerat aliquam, risus nisl eleifend lectus,
            eget tempor purus diam ut elit.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default ListingDetailsScreen;
