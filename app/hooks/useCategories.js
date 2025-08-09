import { useState } from "react";
import CATEGORIES from "../config/Categories";

export default function useCategories() {
  const [categories] = useState(CATEGORIES);

  //fetching logic if needed in future

  return categories;
}
