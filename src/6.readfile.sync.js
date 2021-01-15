// import java.io.*;

// Internal Module :: this comes by default with nodejs
const fs = require("fs");

function main() {
  const filePath = "/Users/research/Desktop/day5/package.json";
  const fileOutput = fs.readFileSync(filePath, { encoding: "utf-8" });

  console.log(fileOutput);
}

main();
