import itemsJson from "@/data/items.json";
import locationsJson from "@/data/locations.json";
import { JSONItemsData, JSONLocationsData } from "@/types/data.ts";

export const itemData = itemsJson as JSONItemsData;
export const locationData = locationsJson as JSONLocationsData;
