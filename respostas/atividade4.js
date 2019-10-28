const { products } = require("../data");

const soma = products.reduce((acc, curr) => acc + curr.price, 0);

console.table(soma);
