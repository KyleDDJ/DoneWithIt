/**
 * ListingsScreen.js
 *
 * This screen displays a list of product listings.
 *
 * Features:
 * - Displays listings in a scrollable FlatList
 * - Supports pull-to-refresh functionality
 * - Uses a custom `useListings` hook for state management and data handling
 *
 * Data flow:
 * - Listings data is provided by the `useListings` hook
 * - Each listing is rendered using the `Card` component
 *
 * UI:
 * - Wrapped inside the `Screen` component for safe area handling and layout consistency
 * - Light grey background with padding
 *
 * @component
 * @example
 * return (
 *   <ListingsScreen />
 * )
 */

import React from "react";
import { FlatList, StyleSheet } from "react-native";

import styles from "../styles/ListingsScreen.styles";
import Screen from "../components/Screen";
import Card from "../components/Card";

import useListings from "../hooks/useListings";

function ListingsScreen() {
  const { listings, refreshing, handleRefresh } = useListings();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            sub_title={"$" + item.price}
            image={item.image}
          />
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
}

export default ListingsScreen;
