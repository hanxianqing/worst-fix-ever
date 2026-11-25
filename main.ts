import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Fix Ever: funniest commit message, written fresh for this entry.
// The fix "worked" — by deleting the thing users actually wanted.
// Fresh angle: no revert, no testing in production, no "broke everything".
const LINE = "fix: removed the feature; bug fixed, users furious, technically a win";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–100 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
