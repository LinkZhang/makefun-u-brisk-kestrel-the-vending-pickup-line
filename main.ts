// A make.fun program/v1 entry (Node 22, standard library only): it writes one
// pickup line, as if a vending machine were flirting with a passing human,
// to /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "I've been humming your name all day — press B7 and I'll drop something sweet, no exact change required.";

// Gate self-check (RULES.txt): UTF-8 text, 1–200 chars, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  console.error(`entry line must be 1–200 chars, got ${line.length}`);
  process.exit(1);
}
if (line.includes('\n') || line.includes('\r')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${line.length} chars)`);
