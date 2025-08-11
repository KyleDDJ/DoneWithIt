import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  ...otherProps
}) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => {
          setFieldValue(name, item);
          setFieldTouched(name, true);
        }}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

// import React from "react";
// import { useFormikContext } from "formik";
// import AppPicker from "../AppPicker";
// import ErrorMessage from "./ErrorMessage";

// function AppFormPicker({
//   items,
//   name,
//   PickerItemComponent,
//   numberOfColumns,
//   placeholder,
//   ...otherProps
// }) {
//   const { errors, setFieldValue, touched, values } = useFormikContext();

//   return (
//     <>
//       <AppPicker
//         items={items}
//         selectedItem={values[name]}
//         numberOfColumns={numberOfColumns}
//         onSelectItem={(item) => setFieldValue(name, item)}
//         PickerItemComponent={PickerItemComponent}
//         placeholder={placeholder}
//         {...otherProps}
//       />
//       <ErrorMessage error={errors[name]} visible={touched[name]} />
//     </>
//   );
// }

// export default AppFormPicker;
