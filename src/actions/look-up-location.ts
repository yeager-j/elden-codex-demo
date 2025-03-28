import { select } from "@inquirer/prompts";

import { Item, Location } from "@/types/data.ts";
import { itemData, locationData } from "@/utils/data.ts";

/**
 * Formats a location and its associated items into a readable string.
 *
 * @param {Location} location - The location object containing details about the location.
 * @param {Item[]} items - An array of item objects associated with the location.
 * @return {string} A formatted string that lists the location name and its items, or a message indicating no items exist.
 */
export function formatLocation(location: Location, items: Item[]): string {
  return `Items within ${location.name}
${items.map((item) => `- ${item.name}`).join("\n")}
${items.length === 0 ? "No items found." : ""}`;
}

/**
 * Finds a location by its identifier, retrieves items associated with the location,
 * and displays the formatted location details.
 *
 * @param {string} locationToFind The unique identifier of the location to locate and display.
 * @return {void} Does not return any value. Throws an error if the location is not found.
 */
export function findAndDisplayLocation(locationToFind: string): void {
  const selectedLocation = locationData.locations.find(
    (location) => location.id === locationToFind,
  );

  const itemsAtLocation = itemData.items.filter(
    (item) => item.locationId === locationToFind,
  );

  if (!selectedLocation) {
    throw new Error(
      "Location not found. This shouldn't happen since the user selected a location from the list.",
    );
  }

  console.log(formatLocation(selectedLocation, itemsAtLocation));
}

/**
 * Prompts the user to select a location from a list and retrieves details about the selected location.
 *
 * @return A promise that resolves when the location is successfully looked up and displayed.
 */
export async function lookUpLocation() {
  const locationToFind = await select({
    message: "Which location do you want to look up?",
    choices: locationData.locations.map((location) => ({
      name: location.name,
      value: location.id,
    })),
  });

  findAndDisplayLocation(locationToFind);
}
