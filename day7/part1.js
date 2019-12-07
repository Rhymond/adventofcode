const data = require("./input");

const execute = (code, input, phase) => {
    let pos = 0;
    let isPhase = true;

    while (code[pos] !== 99) {
        let opcode = code[pos].toString().split('').reverse();
        let num1 = opcode[2] === "1" ? code[pos + 1] : code[code[pos + 1]];
        let num2 = opcode[3] === "1" ? code[pos + 2] : code[code[pos + 2]];

        if (opcode[0] === "2" || opcode[0] === "1") {
            code[code[pos + 3]] = opcode[0] === "1" ? num1 + num2 : num1 * num2;
            pos += 4;
            continue;
        }

        if (opcode[0] === "3") {
            code[code[pos+1]] = isPhase ? phase : input;
            isPhase = !isPhase;
            pos += 2;
            continue
        }

        if (opcode[0] === "4") {
            return code[code[pos+1]];
        }

        if (opcode[0] === "5") {
            pos = num1 !== 0 ? num2 : pos + 3;
            continue;
        }

        if (opcode[0] === "6") {
            pos = num1 === 0 ? num2 : pos + 3;
            continue;
        }

        if (opcode[0] === "7") {
            code[code[pos + 3]] = num1 < num2 ? 1 : 0;
            pos += 4;
            continue;
        }

        if (opcode[0] === "8") {
            code[code[pos + 3]] = num1 === num2 ? 1 : 0;
            pos += 4;
            continue;
        }

       pos++;
    }
};

let answer1 = 0;
for (let i = 0; i < Math.pow(5, 5); i++) {
    const setting = i.toString(5).padStart(5, "0").split("");

    if ([...new Set(setting)].length !== setting.length) {
        continue;
    }

    const output = setting.reduce((input, phase) => execute(data, input, parseInt(phase)), 0);

    if (output > answer1) {
        answer1 = output;
    }
}

console.log(answer1);

