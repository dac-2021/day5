async function add(n1, n2) {
  return n1 + n2;
}

// main function which will use the above function
async function main() {
  let output = await add(10, 20);
  console.log("Output", output);
}

main();
