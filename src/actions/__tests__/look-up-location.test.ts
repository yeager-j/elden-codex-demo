import { afterEach, describe, expect, it, vi } from "vitest";

import { findAndDisplayLocation, formatLocation } from "../look-up-location";

import { Item, Location } from "@/types/data";

vi.mock("@/utils/data.ts");

describe("formatLocation", () => {
  it("should format a location with its associated items", () => {
    const location: Location = {
      id: "test-location",
      name: "Test Location",
    };

    const items: Item[] = [
      {
        id: "test-item-1",
        name: "Test Item 1",
        itemType: "weapon",
        locationId: "test-location",
        description: "This is a test description 1",
      },
      {
        id: "test-item-2",
        name: "Test Item 2",
        itemType: "armor",
        locationId: "test-location",
        description: "This is a test description 2",
      },
    ];

    const result = formatLocation(location, items);

    expect(result).toBe(`Items within Test Location
- Test Item 1
- Test Item 2
`);
  });

  it("should format a location with no items", () => {
    const location: Location = {
      id: "empty-location",
      name: "Empty Location",
    };

    const items: Item[] = [];

    const result = formatLocation(location, items);

    expect(result).toBe(`Items within Empty Location

No items found.`);
  });
});

describe("findAndDisplayLocation", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterEach(() => {
    consoleMock.mockReset();
  });

  it("should find a location by id and display its formatted details", () => {
    findAndDisplayLocation("limgrave-deathtouched-catacombs");

    expect(consoleMock)
      .toHaveBeenCalledWith(`Items within Deathtouched Catacombs
- Uchigatana
`);
  });

  it("should display no items when location has no associated items", () => {
    findAndDisplayLocation("empty-location");

    expect(consoleMock).toHaveBeenCalledWith(`Items within Empty Location

No items found.`);
  });

  it("should throw an error if the location is not found", () => {
    expect(() => findAndDisplayLocation("non-existent-location")).toThrow(
      "Location not found. This shouldn't happen since the user selected a location from the list.",
    );
  });
});
