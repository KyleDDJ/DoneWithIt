import React, { useState } from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import stylesEdit from "../styles/ListingEditScreen.styles";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useCategories from "../hooks/useCategories";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

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
  const location = useLocation();
  // Custom hook to fetch categories for the picker
  const categories = useCategories();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={stylesEdit.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <FormImagePicker name="images" />
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
