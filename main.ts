// Pigeon Pitch, One Line: the pitch a city pigeon gives investors for its startup
import { mkdirSync, writeFileSync } from "node:fs";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const pitch = "Last-mile delivery with no fleet, no fuel, no payroll. Every sidewalk is a warehouse, and my cousins are already on shift.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${pitch}\n`, "utf8");
