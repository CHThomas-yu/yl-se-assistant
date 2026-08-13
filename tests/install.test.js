"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

test("installer copies the complete skill into the configured skills root", () => {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), "yl-se-assistant-test-"));

  try {
    const result = spawnSync(process.execPath, [
      path.resolve(__dirname, "..", "scripts", "install-skill.js")
    ], {
      env: {
        ...process.env,
        YL_SE_ASSISTANT_SKILLS_ROOT: temporaryRoot
      },
      encoding: "utf8"
    });

    assert.equal(result.status, 0, result.stderr);

    const installedRoot = path.join(temporaryRoot, "yl-se-assistant");
    assert.ok(fs.existsSync(path.join(installedRoot, "SKILL.md")));
    assert.ok(fs.existsSync(path.join(installedRoot, "agents", "openai.yaml")));
    assert.ok(fs.existsSync(path.join(installedRoot, "assets", "icon.svg")));
    assert.ok(
      fs.existsSync(
        path.join(installedRoot, "references", "technical-research.md")
      )
    );
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }
});
