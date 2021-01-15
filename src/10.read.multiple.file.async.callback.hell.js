const fs = require("fs");

function main() {
  // Read file 1
  const filePath1 =
    "/Users/research/Desktop/day5/src/1.regular.calculator.js";

  fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
    console.log("FILE 1", data);

    // Read file2
    const filePath2 =
      "/Users/research/Desktop/day5/src/2.async.calculator.js";

    fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
      console.log("FILE 2", data);

      // Read file3
      const filePath3 =
        "/Users/research/Desktop/day5/src/3.regular.calculator.adv.js";

      fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
        console.log("FILE 3", data);
      });
    });
  });
}

main();
