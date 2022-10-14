import { createReadStream, createWriteStream, type PathLike } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { getFilenameFromFilePath } from "./lib/utils.js";

const sourceFilePath = new URL("../data_files/kc_house_data.csv", import.meta.url).pathname;
const sourcePathName = getFilenameFromFilePath(sourceFilePath);
const destinationPath = new URL(`../compressed_files/${sourcePathName}.gz`, import.meta.url).pathname;
console.log({ filePath: sourceFilePath, sourcePathName });

export const compressFile = async (path: PathLike) => {
  try {
    await pipeline(
      createReadStream(path),
      createGzip(),
      createWriteStream(destinationPath).on("finish", () => {
        console.log(`Compression process done: ${destinationPath}`);
      })
    );
    console.log("Pipeline succeeded");
  } catch (error) {
    console.error("Pipeline failed", error);
  }
};

await compressFile(sourceFilePath);
