"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const skillName = "yl-se-assistant";
const sourceDirectory = path.resolve(__dirname, "..", "skill", skillName);
const skillsRoot = process.env.YL_SE_ASSISTANT_SKILLS_ROOT
  ? path.resolve(process.env.YL_SE_ASSISTANT_SKILLS_ROOT)
  : path.join(os.homedir(), ".agents", "skills");
const targetDirectory = path.join(skillsRoot, skillName);

if (!fs.existsSync(path.join(sourceDirectory, "SKILL.md"))) {
  throw new Error(`The bundled ${skillName}/SKILL.md file is missing.`);
}

fs.mkdirSync(targetDirectory, { recursive: true });
fs.cpSync(sourceDirectory, targetDirectory, {
  recursive: true,
  force: true,
  errorOnExist: false
});

if (!fs.existsSync(path.join(targetDirectory, "SKILL.md"))) {
  throw new Error(`Installation verification failed: ${targetDirectory}`);
}

console.log(`[yl-se-assistant] Skill installed successfully: ${targetDirectory}`);
