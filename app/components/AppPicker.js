import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyle from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import App from "../../App";

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyle.colors.grey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyle.colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.closeIconContainer}>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={defaultStyle.colors.grey}
            onPress={() => setModalVisible(false)}
          />
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "50%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyle.colors.grey,
    flex: 1,
  },
  closeIconContainer: {
    alignItems: "flex-end",
    padding: 20,
  },
});

export default AppPicker;

//gpt
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useState } from "react";
// import {
//   FlatList,
//   Modal,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// import defaultStyle from "../config/styles";
// import AppText from "./AppText";
// import PickerItem from "./PickerItem";

// function AppPicker({
//   icon,
//   items,
//   onSelectItem,
//   placeholder,
//   selectedItem,
//   PickerItemComponent = PickerItem,
//   numberOfColumns = 1,
// }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
//         <View style={styles.container}>
//           {icon && (
//             <MaterialCommunityIcons
//               name={icon}
//               size={25}
//               color={defaultStyle.colors.grey}
//               style={styles.icon}
//             />
//           )}
//           <AppText
//             style={[
//               styles.text,
//               !selectedItem && { color: defaultStyle.colors.medium },
//             ]}
//           >
//             {selectedItem ? selectedItem.label : placeholder}
//           </AppText>
//           <MaterialCommunityIcons
//             name="chevron-down"
//             size={25}
//             color={defaultStyle.colors.grey}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <Modal visible={modalVisible} animationType="slide">
//         <View style={styles.closeIconContainer}>
//           <MaterialCommunityIcons
//             name="close"
//             size={30}
//             color={defaultStyle.colors.grey}
//             onPress={() => setModalVisible(false)}
//           />
//         </View>
//         <FlatList
//           data={items}
//           keyExtractor={(item) => item.value.toString()}
//           numColumns={numberOfColumns}
//           renderItem={({ item }) => (
//             <PickerItemComponent
//               item={item}
//               onPress={() => {
//                 setModalVisible(false);
//                 onSelectItem(item);
//               }}
//             />
//           )}
//         />
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyle.colors.lightgrey,
//     borderRadius: 25,
//     flexDirection: "row",
//     width: "50%",
//     padding: 15,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//     alignSelf: "center",
//   },
//   text: {
//     flex: 1,
//     fontSize: 18,
//     color: defaultStyle.colors.black,
//   },
//   closeIconContainer: {
//     alignItems: "flex-end",
//     padding: 20,
//   },
// });

// export default AppPicker;
