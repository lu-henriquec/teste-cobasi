const { products } = require("../data");

const product = products.reduce((acc, curr) =>
  acc.price > curr.price ? acc : curr
);

console.table(product);
