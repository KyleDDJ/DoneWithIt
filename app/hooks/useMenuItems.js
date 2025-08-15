import colors from "../config/Colors";

export function useMenuItems() {
  return [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.darkgreen,
      },
      targetScreen: "MyListings",
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.darkgreen,
      },
      targetScreen: "Messages",
    },
  ];
}
