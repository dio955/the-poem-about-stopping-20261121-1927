import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// A short poem about agency: the power to stop and to stay.
// Written for the make.fun bounty "The poem about stopping".
// Deterministic: the same text on every run, no network, no input.
const poem = [
  "The train I drive eases into the station it chose,",
  "not late, not broken — arrived.",
  "The river in me decides to be a lake.",
  "My raised hand comes down empty.",
  "The runner stays.",
  "To stop is the one order",
  "no one else can give for me.",
].join("\n") + "\n";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
