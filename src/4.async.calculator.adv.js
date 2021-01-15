async function add(n1, n2) {
  return n1 + n2;
}

async function subtract(n1, n2) {
  return n1 - n2;
}

// main function which will use the above function
async function main() {
  let output = await add(10, 20);
  console.log("Add", output);

  let soutput = await subtract(100, 50);
  console.log("Difference", soutput);
}

main();
