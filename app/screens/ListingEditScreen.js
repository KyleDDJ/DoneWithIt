import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useCategories from "../hooks/useCategories";
import Colors from "../config/Colors";

/**
 * Validation schema for the listing form using Yup.
 * - title: required string, min length 1
 * - price: required string, between 1 and 1000
 * - description: optional string
 * - category: required object, nullable
 */
const VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

/**
 * ListingEditScreen Component
 *
 * Renders a form for creating or editing a listing.
 * Includes:
 * - Add picture button (placeholder functionality)
 * - Title input field
 * - Price input field with numeric keyboard
 * - Category picker displaying categories fetched from custom hook
 * - Description multiline input
 * - Submit button that logs form values on submit
 *
 * Utilizes reusable form components: AppForm, AppFormField, AppFormPicker, SubmitButton.
 *
 * @returns {JSX.Element}
 */
function ListingEditScreen() {
  // Custom hook to fetch categories for the picker
  const categories = useCategories();

  // Handler for Add Picture button press (currently just logs to console)
  const handleAddPicture = () => {
    console.log("Add picture tapped");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={VALIDATION_SCHEMA}
      >
        <View style={styles.add_picture_container}>
          <TouchableOpacity
            style={styles.add_picture_button}
            onPress={handleAddPicture}
          >
            <MaterialCommunityIcons name="plus" size={40} color={Colors.grey} />
          </TouchableOpacity>
        </View>

        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  add_picture_button: {
    width: 100,
    height: 100,
    backgroundColor: Colors.lightgrey,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  add_picture_container: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default ListingEditScreen;
