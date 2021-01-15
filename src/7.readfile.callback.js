// Internal Module :: this comes by default with nodejs
const fs = require("fs");

function main() {
  const filePath = "/Users/research/Desktop/day5/package.json";

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(err);

    console.log(data);
  });
}

main();
