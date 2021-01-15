const fs = require("fs");
const Promise = require("bluebird");

// It will convert the Callback Aware method into Promise aware method using bluebird
Promise.promisifyAll(fs);

async function main() {
  const filePath1 =
    "/Users/research/Desktop/day5/src/1.regular.calculator.js";
  let fo1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
  console.log("File 1", fo1);

  const filePath2 =
    "/Users/research/Desktop/day5/src/2.async.calculator.js";
  let fo2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
  console.log(fo2);
}

main();
