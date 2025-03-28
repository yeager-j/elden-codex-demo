**DEMO IMPLEMENTATION FOR BELOW PRD**

# Elden Ring Item Catalog CLI - Product Requirements Document

## Overview
A command-line interface (CLI) tool that helps users find information about items in Elden Ring. The tool will access a local JSON database of item information and allow users to look up items by location or get detailed information about specific items.

## Core Functionality

### Data Structure
- Item data will be stored in a JSON file
- Each item should include:
    - Name
    - Type (weapon, armor, consumable, key item, etc.)
    - Location found
    - Description
    - Any additional relevant properties (damage values, weight, etc.)

### Commands
The CLI will support two primary commands:

1. `--location [location_name]`
    - Lists all items found in the specified location
    - Displays a simplified view (name and type)
    - Example: `ts-node index.ts --location "Limgrave"`

2. `--item [item_name]`
    - Shows detailed information about a specific item
    - Displays all properties of the item
    - Example: `ts-node index.ts --item "Uchigatana"`

### User Experience
- Clear, readable console output
- Informative error messages for invalid inputs
- Case-insensitive search

### Bonus Points
Instead of requiring the user to manually type in CLI arguments, you could improve
UX by using some sort of CLI menu library.

## Technical Requirements

### TypeScript Implementation
- Create appropriate interfaces for item types
- Use type safety throughout the application
- Implement error handling with proper typing

### Data Considerations
- Location data structure should be designed with future expansion in mind
- Consider how locations will eventually become graph nodes
- Plan for a data structure that can later incorporate pathways between locations

## Future Expansion
This CLI tool will serve as the foundation for a more complex routing tool. In planning the implementation, consider:

- How locations will connect to each other in a graph structure
- How item locations will serve as nodes in this graph
- How to structure the data to support pathfinding algorithms later

The structure of this initial project should allow for easy expansion when implementing the React-based routing tool in the future.