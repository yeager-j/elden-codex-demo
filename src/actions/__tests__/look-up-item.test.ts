import { afterEach, describe, expect, it, vi } from "vitest";

import { findAndDisplayItem, formatItem } from "../look-up-item";

import { Item, Location } from "@/types/data";

vi.mock("@/utils/data.ts");

describe("formatItem", () => {
  it("should format an item with its details and location", () => {
    const item: Item = {
      id: "test-item",
      name: "Test Item",
      itemType: "weapon",
      locationId: "test-location",
      description: "This is a test description",
    };

    const location: Location = {
      id: "test-location",
      name: "Test Location",
    };

    const result = formatItem(item, location);

    expect(result).toBe(
      `Test Item - weapon
Can be found at Test Location.
----
This is a test description`,
    );
  });
});

describe("findAndDisplayItem", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterEach(() => {
    consoleMock.mockReset();
  });

  it("should find an item by id and display its formatted details", () => {
    findAndDisplayItem("uchigatana");

    expect(consoleMock).toHaveBeenCalledWith(
      `Uchigatana - weapon
Can be found at Deathtouched Catacombs.
----
A katana with a long single-edged curved blade.`,
    );
  });

  it("should throw an error if the item is not found", () => {
    expect(() => findAndDisplayItem("non-existent-item")).toThrow(
      "Item not found. This shouldn't happen since the user selected an item from the list.",
    );
  });
});
