const fs = require("fs");

const mymod = require("./12.local.module");
const myfs = require("./13.readfile");
const mycalc = require("./14.calculator");

async function main() {
  let o1 = mymod.sayHello();
  console.log(o1);

  const filePath = "/Users/research/Desktop/day5/package.json";
  const o2 = await myfs.myreadFile(filePath);

  console.log(o2);
}

async function calcMain() {
  let o1 = await mycalc.add(1, 2);
  console.log("Sum", o1);

  let o2 = await mycalc.subtract(20, 10);
  console.log("Diff", o2);
}

calcMain();
