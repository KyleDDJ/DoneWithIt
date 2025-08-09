/**
 * useMessages Hook
 *
 * Manages a list of messages with functionality for:
 * - Deleting individual messages
 * - Pull-to-refresh to reset the list
 *
 * This hook:
 *  - Stores the initial list of messages in local state
 *  - Provides handlers for deletion and refresh
 *
 * @returns {Object} Hook state and actions
 * @returns {Array} messages - The current list of messages
 * @returns {boolean} refreshing - Whether the list is currently refreshing
 * @returns {Function} handleDelete - Deletes a message from the list
 * @returns {Function} handleRefresh - Resets the list to its first message
 */

import { useState } from "react";
import USER1 from "../assets/users/user.jpg";
import USER2 from "../assets/users/user2.jpg";
import USER3 from "../assets/users/user3.jpg";
import USER4 from "../assets/users/james.jpg";
import USER5 from "../assets/products/red.jpg";

// Initial message data (can be replaced by API data in the future)
const INITIAL_MESSAGES = [
  {
    id: 1,
    title: "Kyle De Jesus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non.",
    image: USER1,
  },
  {
    id: 2,
    title: "Joseph Neil Gapuz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non.",
    image: USER2,
  },
  {
    id: 3,
    title: "Rod Alvin Cudiamat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non.",
    image: USER3,
  },
  {
    id: 4,
    title: "James Derek Orodio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non.",
    image: USER4,
  },
  {
    id: 5,
    title: "Kenneth Robie Laigo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est et massa gravida luctus. Sed mattis efficitur erat ut consectetur. Aliquam imperdiet arcu elit, in malesuada nunc convallis vitae. Praesent aliquet iaculis nisi, eu ornare nulla interdum non.",
    image: USER5,
  },
];

const useMessages = () => {
  // State: list of messages
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  // State: whether the list is being refreshed
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Deletes a specific message from the list.
   * @param {Object} message - The message object to delete.
   */
  const handleDelete = (message) => {
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id)
    );
  };

  /**
   * Simulates pull-to-refresh by:
   * - Temporarily setting refreshing to true
   * - Resetting messages to only the first one after 3 seconds
   */
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMessages([INITIAL_MESSAGES[0]]);
      setRefreshing(false);
    }, 3000);
  };

  return {
    messages,
    refreshing,
    handleDelete,
    handleRefresh,
  };
};

export default useMessages;
