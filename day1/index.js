const input = require("./input");

const answer1 = input.reduce((a, val) => a + Math.floor(val/3)-2, 0);
console.log(answer1);

const answer2 = input.reduce((a, val) => {
  let c = Math.floor(val/3)-2;
  while (c > 0) {
    a += c;
    c = Math.floor(c/3)-2;
  }
  return a
}, 0);
console.log(answer2);
