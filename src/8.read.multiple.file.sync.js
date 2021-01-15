const fs = require("fs");

function main() {
  // Read file 1
  const filePath1 =
    "/Users/research/Desktop/day5/src/1.regular.calculator.js";
  const fsOutput1 = fs.readFileSync(filePath1, { encoding: "utf-8" });
  console.log("FILE1", fsOutput1);

  // Read file 2
  const filePath2 =
    "/Users/research/Desktop/day5/src/2.async.calculator.js";
  const fsOutput2 = fs.readFileSync(filePath2, { encoding: "utf-8" });
  console.log("FILE2", fsOutput2);

  // Read file 3
  const filePath3 =
    "/Users/research/Desktop/day5/src/3.regular.calculator.adv.js";
  const fsOutput3 = fs.readFileSync(filePath3, { encoding: "utf-8" });
  console.log("FILE3", fsOutput3);
}

main();
