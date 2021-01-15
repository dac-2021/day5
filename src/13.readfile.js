const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

async function myreadFile(filePath) {
  const fileOutput1 = await fs.readFileAsync(filePath, {
    encoding: "utf-8",
  });
  return fileOutput1;
}

module.exports = {
  myreadFile: myreadFile,
};
