import { useState } from "react";

import red from "../assets/products/red.jpg";
import couch from "../assets/products/couch.jpg";
import switchNintendo from "../assets/products/switch.jpg";

const INITIAL_LISTINGS = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: red,
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: couch,
  },
  {
    id: 3,
    title: "Nintendo Switch 2",
    price: 3000,
    image: switchNintendo,
  },
];

const useListings = () => {
  const [listings, setListings] = useState(INITIAL_LISTINGS);
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Pull-to-refresh simulation
   * Resets listings after a short delay
   */
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setListings(INITIAL_LISTINGS);
      setRefreshing(false);
    }, 1500);
  };

  return {
    listings,
    refreshing,
    handleRefresh,
  };
};

export default useListings;
