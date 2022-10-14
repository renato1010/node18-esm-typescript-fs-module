import { sep } from "path";
import url from "url";
import { readFile } from "fs/promises";

console.log({ "path-separator": sep });

const dirName = url.fileURLToPath(new URL(".", import.meta.url));

// const filePath = join(dirName, "subfolder", "test.txt");
const filePath = new URL("./subfolder/test.txt", import.meta.url);

const content = await readFile(filePath, { encoding: "utf-8" });
const baseName = filePath.pathname.split(sep).at(-1);

// const baseName = basename(filePath);

console.log({ filePath, dirName, content, baseName });
