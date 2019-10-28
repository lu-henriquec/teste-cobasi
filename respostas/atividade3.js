const { products } = require("../data");

const product = products.reduce((acc, curr) =>
  acc.price > curr.price ? curr : acc
);

console.table(product);
