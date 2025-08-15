import React from "react";
import { View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import { useMenuItems } from "../hooks/useMenuItems";
import stylesAccount from "../styles/AccountScreen.styles";
import userImage from "../assets/users/user.jpg";
import useAuth from "../hooks/useAuth";

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

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
      onPress={() => navigation.navigate(item.targetScreen)}
    />
  );

  return (
    <Screen style={stylesAccount.screen}>
      <View style={stylesAccount.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={userImage}
          showChevron={false}
        />
      </View>
      <View style={stylesAccount.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={renderMenuItem}
        />
      </View>
      <ListItem
        onPress={() => logOut()}
        title={"Log Out"}
        showChevron={false}
        IconComponent={<Icon name="logout" backgroundColor="#33392b" />}
      />
    </Screen>
  );
}

export default AccountScreen;
