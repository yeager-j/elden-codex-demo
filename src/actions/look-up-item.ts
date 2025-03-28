import { select } from "@inquirer/prompts";

import { Item, Location } from "@/types/data.ts";
import { itemData, locationData } from "@/utils/data.ts";

/**
 * Formats an item object into a string representation with its details and location.
 *
 * @param {Item} item - The item to be formatted, containing its name, type, and description.
 * @param {Location} location - The location object where the item can be found, containing the location's name.
 * @return {string} A formatted string containing the item's details and its location.
 */
export function formatItem(item: Item, location: Location): string {
  return `${item.name} - ${item.itemType}
Can be found at ${location.name}.
----
${item.description}`;
}

/**
 * Finds an item by its identifier, retrieves its associated location,
 * formats the details, and displays them.
 *
 * @param {string} itemToFind - The identifier of the item to locate.
 * @return {void} This function does not return a value.
 */
export function findAndDisplayItem(itemToFind: string): void {
  const selectedItem = itemData.items.find((item) => item.id === itemToFind);
  const itemLocation = locationData.locations.find(
    (location) => location.id === selectedItem?.locationId,
  );

  if (!selectedItem) {
    throw new Error(
      "Item not found. This shouldn't happen since the user selected an item from the list.",
    );
  }

  if (!itemLocation) {
    throw new Error(
      "Item location not found. This shouldn't happen since the item location is part of the item data.",
    );
  }

  console.log(formatItem(selectedItem, itemLocation));
}

/**
 * Asynchronously prompts the user to select an item to look up, and then finds and displays the selected item.
 *
 * @return A promise that resolves once the item lookup and display process is complete.
 */
export async function lookUpItem() {
  const itemToFind = await select({
    message: "What item do you want to find?",
    choices: itemData.items.map((item) => ({
      name: item.name,
      value: item.id,
    })),
  });

  findAndDisplayItem(itemToFind);
}
