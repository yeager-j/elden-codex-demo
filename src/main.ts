import { select } from "@inquirer/prompts";

import { actionMap } from "@/action-map.ts";

async function main() {
  const action = await select<keyof typeof actionMap>({
    message: "Welcome to Elden Codex! What would you like to do?",
    choices: [
      {
        name: "Look Up Item",
        value: "lookUpItem",
        description: "Look up the details for an item.",
      },
      {
        name: "Look Up Location",
        value: "lookUpLocation",
        description: "List available items at a location.",
      },
    ],
  });

  actionMap[action]();
}

main();
