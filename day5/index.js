let code = require("./input");
// code = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
//     1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
//     999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
const input = 1;
let pos = 0;

while (code[pos] !== 99) {
    if (code[pos] === 3) {
        code[code[pos+1]] = input;
        pos += 2;
        continue
    }

    if (code[pos] === 4) {
        console.log(code[code[pos+1]]);
        pos += 2;
        continue
    }

    let opcode = code[pos].toString().split('').reverse();
    if (opcode[0] === "2" || opcode[0] === "1") {
        let num1 = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        let num2 = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];
        code[code[pos + 3]] = opcode[0] === "1" ? num1 + num2 : num1 * num2;
        pos += 4;
        continue;
    }

    if (opcode[0] === "5") {
        let num = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        if (num !== 0) {
            pos = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];
        } else {
            pos += 3;
        }
        continue;
    }

    if (opcode[0] === "6") {
        let num = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        if (num === 0) {
            pos = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];
        } else {
            pos += 3;
        }
        continue;
    }

    if (opcode[0] === "7") {
        let num1 = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        let num2 = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];
        code[code[pos + 3]] = num1 < num2 ? 1 : 0;
        pos += 4;
        continue;
    }

    if (opcode[0] === "8") {
        let num1 = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        let num2 = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];
        code[code[pos + 3]] = num1 === num2 ? 1 : 0;
        pos += 4;
        continue;
    }

   pos++;
}
