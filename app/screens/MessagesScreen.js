import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Footer from "../components/Footer";

const initialMessages = [
  {
    id: 1,
    title: "Kyle De Jesus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non. Mauris pretium, ex vitae interdum feugiat, orci sapien suscipit sapien, at lacinia urna nisi in augue. Duis dictum a nunc vel luctus. Suspendisse aliquet purus magna. Nam ac dolor in est rhoncus venenatis. Donec eu urna pulvinar, sagittis justo sit amet, feugiat enim. Proin egestas mi at fermentum accumsan. Vestibulum in venenatis leo, vel molestie eros",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "Joseph Neil Gapuz",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: require("../assets/user2.jpg"),
  },
  {
    id: 3,
    title: "Rod ALvin Cudiamat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: require("../assets/user3.jpg"),
  },
  {
    id: 4,
    title: "James Derek Orodio",
    description: "Sulasok!",
    image: require("../assets/james.jpg"),
  },
  {
    id: 5,
    title: "Kenneth Robie Laigo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: require("../assets/red.jpg"),
  },
];

function MessagesScreen({ props }) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
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
        onRefresh={() =>
          setMessages([
            {
              id: 1,
              title: "Kyle De Jesus",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non. Mauris pretium, ex vitae interdum feugiat, orci sapien suscipit sapien, at lacinia urna nisi in augue. Duis dictum a nunc vel luctus. Suspendisse aliquet purus magna. Nam ac dolor in est rhoncus venenatis. Donec eu urna pulvinar, sagittis justo sit amet, feugiat enim. Proin egestas mi at fermentum accumsan. Vestibulum in venenatis leo, vel molestie eros",
              image: require("../assets/user.jpg"),
            },
          ])
        }
      />
      <Footer
        onPlusPress={() => console.log("New Message pressed")}
        onChatsPress={() => console.log("Chats pressed")}
        onMenusPress={() => console.log("Menus pressed")}
      />
    </Screen>
  );
}
export default MessagesScreen;
