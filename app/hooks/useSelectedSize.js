import { useState } from "react";

export default function useSelectedSize(initialSize = "M") {
  const [selectedSize, setSelectedSize] = useState(initialSize);

  return { selectedSize, setSelectedSize };
}
