import { readFile, appendFile } from "fs";
import { promisify } from "./promisify.js";


const readFilePromisified = promisify(readFile);
const appendFilePromisified = promisify(appendFile);

const filePath = new URL("./subfolder/test.txt", import.meta.url);

const fileContent = await readFilePromisified(filePath, { encoding: "utf-8" });

const addContent = "line6";

await appendFilePromisified(filePath, addContent, { encoding: "utf-8" });

const freshFileContent = await readFilePromisified(filePath, { encoding: "utf-8" });

console.log({ filePath: filePath.pathname, fileContent, freshFileContent });
