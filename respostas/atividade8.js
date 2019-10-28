const { products } = require("../data");

const ordered = products.sort((valorA, valorB) => {
  return valorB.price - valorA.price;
});

console.table(ordered);
