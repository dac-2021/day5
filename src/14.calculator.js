async function add(n1 = 10, n2 = 20) {
  return n1 + n2;
}

async function subtract(n1 = 1, n2 = 1) {
  return n1 - n2;
}

async function multiply(n1 = 10, n2 = 10) {
  return n1 * n2;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
};
