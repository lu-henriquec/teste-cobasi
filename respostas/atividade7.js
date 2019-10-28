const { products } = require("../data");

const hasProduct = products.some(prod => prod.price === 179.9);

console.table(hasProduct);
