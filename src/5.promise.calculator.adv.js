function add(n1, n2) {
  return new Promise((resolve, reject) => {
    let total = n1 + n2;
    resolve(total);

    // reject("Operation Failed");
  });
}

// main function which will use the above function
async function main() {
  let output = await add(10, 20);
  console.log("Output", output);
}

function main1() {
  add(1, 1)
    .then((p1) => {
      console.log("Result", p1);
    })
    .catch((err) => {
      console.log(err);
    });
}

main();

main1();
