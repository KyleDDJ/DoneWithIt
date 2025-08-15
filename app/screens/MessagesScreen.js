/**
 * MessagesScreen.js
 *
 * This screen displays a list of messages (mock or from API) with support for:
 * - Swipe-to-delete functionality
 * - Pull-to-refresh functionality
 *
 * The data and logic are managed by the custom `useMessages` hook, which:
 *   - Stores the message list in local state
 *   - Handles deletion of individual messages
 *   - Handles refresh to reset the message list
 */

import React from "react";
import { FlatList } from "react-native";

// Custom UI components
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

// import styles from "../styles/MessagesScreen.styles";

// Custom hook to handle message state & actions
import useMessages from "../hooks/useMessages";
import Colors from "../config/Colors";

function MessagesScreen() {
  // Extract state & handlers from the custom hook
  const { messages, refreshing, handleDelete, handleRefresh } = useMessages();

  return (
    <Screen style={{ backgroundColor: Colors.darkgreen }}>
      {/**
       * FlatList:
       * - Displays the list of messages.
       * - Supports swipe-to-delete via `renderRightActions`.
       * - Supports pull-to-refresh via `refreshing` and `onRefresh`.
       */}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
}

export default MessagesScreen;
