import { readFile, appendFile } from "node:fs/promises";

const filePath = new URL("./subfolder/test.txt", import.meta.url);

const fileContent = await readFile(filePath, { encoding: "utf-8" });

const addContent = "line6";

await appendFile(filePath, addContent, { encoding: "utf-8" });

const freshFileContent = await readFile(filePath, { encoding: "utf-8" });

console.log({ filePath: filePath.pathname, fileContent, freshFileContent });
