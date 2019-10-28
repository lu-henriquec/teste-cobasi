const { products } = require("../data");

const productsFilter = products.filter(prod => prod.price > 199);

console.table(productsFilter);
