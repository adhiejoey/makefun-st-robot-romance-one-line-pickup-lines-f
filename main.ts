import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You must have an attention mechanism, because since I met you, I can't focus on anyone else.";

if (line.length < 1 || line.length > 200) {
  console.error(`Entry is ${line.length} characters; the gate needs 1 to 200.`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
