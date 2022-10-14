import { readFileSync, appendFileSync } from "node:fs";

const filePath = new URL("./subfolder/test.txt", import.meta.url);

const fileContent = readFileSync(filePath, { encoding: "utf-8" });

const addContent = "line6";

appendFileSync(filePath, addContent, { encoding: "utf-8" });
const freshFileContent = readFileSync(filePath, { encoding: "utf-8" });

console.log({ filePath: filePath.pathname, fileContent, freshFileContent });
