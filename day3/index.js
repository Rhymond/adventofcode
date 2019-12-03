const { wire1, wire2 } = require("./input");

const getCords = (wire) => {
  let cords = [];
  let x = 0;
  let y = 0;
  wire.forEach(dir => {
    let t = parseInt(dir.substr(1));
    switch (dir[0]) {
      case "R":
        cords.push(...Array.from({length: t}, v => `${x++},${y}` ));
        break;
      case "L":
        cords.push(...Array.from({length: t}, v => `${x--},${y}`));
        break;
      case "D":
        cords.push(...Array.from({length: t}, v => `${x},${y--}`));
        break;
      case "U":
        cords.push(...Array.from({length: t}, v => `${x},${y++}`));
        break;
    }
  });

  return cords;
};

const cords1 = getCords(wire1);
const cords2 = getCords(wire2);
const matching = cords1.filter(e => cords2.includes(e));
matching.shift();

const distance = matching.map(v => v.split(",").reduce((a, v) => a += Math.abs(+v), 0));
console.log(Math.min(...distance));

const steps = matching.map(v => cords1.indexOf(v) + cords2.indexOf(v));
console.log(Math.min(...steps));
