import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import stylesListings from "../styles/ListingsScreen.styles";
import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApis from "../hooks/useApis";
import listingsApi from "../api/listings";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApis(listingsApi.getListings);

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <>
      <Screen style={stylesListings.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              sub_title={`$${item.price}`}
              imageUrl={item.images?.[0]?.url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

export default ListingsScreen;
