"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "README.md",
  "skill/yl-se-assistant/SKILL.md",
  "skill/yl-se-assistant/agents/openai.yaml",
  "skill/yl-se-assistant/assets/icon.svg",
  "skill/yl-se-assistant/references/communication-workflow.md",
  "skill/yl-se-assistant/references/solution-and-support.md",
  "skill/yl-se-assistant/references/technical-research.md"
];

const missingFiles = requiredFiles.filter(
  (relativePath) => !fs.existsSync(path.join(root, relativePath))
);

if (missingFiles.length > 0) {
  throw new Error(`Missing package files:\n${missingFiles.join("\n")}`);
}

console.log(`[yl-se-assistant] Verified ${requiredFiles.length} package files.`);
