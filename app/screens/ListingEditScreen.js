import React from "react";
import { TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import styles from "../styles/ListingEditScreen.styles";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useCategories from "../hooks/useCategories";
import Colors from "../config/Colors";
import FormImagePIcker from "../components/forms/FormImagePIcker";

/**
 * Validation schema for the listing form using Yup.
 * - title: required string, min length 1
 * - price: required string, between 1 and 1000
 * - description: optional string
 * - category: required object, nullable
 * - images: Required array, at least one image selected
 */
const VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().required().label("Category"),

  images: Yup.array().min(1, "Please select atleast one image"),
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
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={VALIDATION_SCHEMA}
      >
        <FormImagePIcker name="images" />
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

export default ListingEditScreen;
