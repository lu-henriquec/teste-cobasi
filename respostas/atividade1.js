const { products } = require("../data");

const product3 = products.find(prod => prod.id === 3);

console.table(product3);
