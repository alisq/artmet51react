// json2csv.mjs
import fs from "node:fs";
const data = JSON.parse(fs.readFileSync("data.json","utf8"));
const keys = [...new Set(data.flatMap(o => Object.keys(o)))];
const rows = [keys.join(",")].concat(
  data.map(o => keys.map(k => JSON.stringify(o[k] ?? "")).join(","))
);
fs.writeFileSync("data.csv", rows.join("\n"));
