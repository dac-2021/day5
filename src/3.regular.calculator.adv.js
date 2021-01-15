function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

// main function which will use the above function
function main() {
  let output = add(10, 20);
  console.log("Add", output);

  let soutput = subtract(50, 10);
  console.log("Difference", soutput);
}

main();
