const { products } = require("../data");

const names = products.map(prod => prod.title);

console.table(names);
