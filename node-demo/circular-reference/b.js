console.log("b模块start");

const a = require("./a");
exports.test = 2;

console.log("undeclaredVariable: ", undeclaredVariable);

console.log("b模块加载完毕: a.test值：", a.test);
