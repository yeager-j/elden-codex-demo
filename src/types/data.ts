export type ItemType = "weapon" | "armor" | "consumable" | "key-item";

export interface Item {
  id: string;
  name: string;
  itemType: ItemType;
  locationId: string;
  description: string;
}

export type JSONItemsData = {
  items: Item[];
};

export interface Location {
  id: string;
  name: string;
}

export type JSONLocationsData = {
  locations: Location[];
};
