// Two Robots in an Elevator — make.fun entry (program/v1).
// Writes one line of awkward robot small talk to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My proximity sensor says we are 41 centimetres apart, the closest I have been to anyone since the factory, and I have spent four floors deciding whether to say hello.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
