// json2csv.mjs
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// --- helpers ---
const isNonEmptyString = v => typeof v === "string" && v.trim().length > 0;

const hasImage = o => isNonEmptyString(o?.image);

// --- read data ---
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

// --- partition data ---
const missingImageRecords = [];
const validData = [];

for (const o of data) {
  if (hasImage(o)) validData.push(o);
  else missingImageRecords.push(o);
}

// --- collect keys from VALID rows only ---
const keys = [...new Set(validData.flatMap(o => Object.keys(o)))];

// --- rename "image" → "@image" in header ---
const renamedKeys = keys.map(k => (k === "image" ? "@image" : k));

// --- build CSV rows ---
const header = renamedKeys.join(",");
const body = validData.map(o =>
  renamedKeys
    .map(k => {
      const originalKey = k === "@image" ? "image" : k;
      let value = o[originalKey] ?? "";
      
      return JSON.stringify(value);
    })
    .join(",")
);

const rows = [header, ...body];

// --- write CSV (expand ~ properly) ---
const outputPath = path.join(
  os.homedir(),
  "Dropbox/ART METROPOLE/Lucky Draw 25/data.csv"
);

fs.writeFileSync(outputPath, rows.join("\n"));
console.log("✅ CSV written to:", outputPath);
// console.log(`✅ Records included: ${validData.length} / ${data.length}`);

// --- report missing-image entries (comma-delimited) ---
if (missingImageRecords.length) {
  const idList = missingImageRecords.map(
    o => o.artist
  );
  console.log("⚠️ Records missing images (comma-delimited):");
  console.log(idList.join(", "));
} else {
  console.log("🎉 No missing images.");
}
