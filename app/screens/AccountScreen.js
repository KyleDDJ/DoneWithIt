import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Colors from "../config/Colors";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import { useMenuItems } from "../hooks/useMenuItems";
import userImage from "../assets/users/user.jpg";

const USER_DETAILS = {
  name: "Kyle De Jesus",
  contact: "shangrilaFrontier@gmail.com | +63 912345678",
};

function AccountScreen() {
  const menuItems = useMenuItems();

  const renderMenuItem = ({ item }) => (
    <ListItem
      title={item.title}
      showChevron={false}
      IconComponent={
        <Icon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
        />
      }
    />
  );

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={USER_DETAILS.name}
          subTitle={USER_DETAILS.contact}
          image={userImage}
          showChevron={false}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={renderMenuItem}
        />
      </View>
      <ListItem
        title={"Log Out"}
        showChevron={false}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.lightgrey,
  },
});

export default AccountScreen;
