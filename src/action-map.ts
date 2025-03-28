import { lookUpItem } from "@/actions/look-up-item.ts";
import { lookUpLocation } from "@/actions/look-up-location.ts";

export type ActionMap = {
  [key: string]: () => void;
};

/**
 * Represents a mapping of action names to their corresponding implementation functions.
 *
 * The `actionMap` object contains key-value pairs where each key is the name of an action,
 * and each value is a function that performs the associated action.
 *
 * This object adheres to the `ActionMap` type, ensuring that all provided actions
 * are correctly defined and implemented.
 */
export const actionMap = {
  lookUpItem: lookUpItem,
  lookUpLocation: lookUpLocation,
  exit: () => {
    console.log("Goodbye!");
    process.exit(0);
  },
} satisfies ActionMap;
