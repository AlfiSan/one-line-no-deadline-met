import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'I tracked the deadline like a parcel — it said "out for delivery" for three days, then "returned to sender."';

const outDir = process.env.OUTPUT_DIR || "/output";

// Gate guard: the entry must be one line, 1-200 chars, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry fails the 1-200 char one-line gate (${LINE.length} chars)`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
