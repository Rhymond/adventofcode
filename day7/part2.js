const data = require("./input");

const execute = (m, input, phase) => {
    let isPhase = true;
    while (m.code[m.pos] !== 99) {
        let opcode = m.code[m.pos].toString().split('').reverse();
        let num1 = opcode[2] === "1" ? m.code[m.pos + 1] : m.code[m.code[m.pos + 1]];
        let num2 = opcode[3] === "1" ? m.code[m.pos + 2] : m.code[m.code[m.pos + 2]];

        if (opcode[0] === "2" || opcode[0] === "1") {
            m.code[m.code[m.pos + 3]] = opcode[0] === "1" ? num1 + num2 : num1 * num2;
            m.pos += 4;
            continue;
        }

        if (opcode[0] === "3") {
            m.code[m.code[m.pos+1]] = isPhase ? phase : input;
            isPhase = !isPhase;
            m.pos += 2;
            continue
        }

        if (opcode[0] === "4") {
            const out = m.code[m.code[m.pos+1]];
            m.pos += 2;
            return out;
        }

        if (opcode[0] === "5") {
            m.pos = num1 !== 0 ? num2 : m.pos + 3;
            continue;
        }

        if (opcode[0] === "6") {
            m.pos = num1 === 0 ? num2 : m.pos + 3;
            continue;
        }

        if (opcode[0] === "7") {
            m.code[m.code[m.pos + 3]] = num1 < num2 ? 1 : 0;
            m.pos += 4;
            continue;
        }

        if (opcode[0] === "8") {
            m.code[m.code[m.pos + 3]] = num1 === num2 ? 1 : 0;
            m.pos += 4;
            continue;
        }

       m.pos++;
    }

    return -1
};

let answer2 = 0;

for (let i = 0; i < Math.pow(5, 5); i++) {
    const setting = i.toString(5).padStart(5, "0").split("");

    if ([...new Set(setting)].length !== setting.length) {
        continue;
    }

    let pi = 0;
    let input = 0;
    let thruster = -1;
    const amplifiers = Array.from({ length: 5 }, () => ({code: [...data], pos: 0}));

    while (input !== -1) {
        const phase = parseInt(setting[pi])+5;
        input = execute(amplifiers[pi], input, thruster === -1 ? phase : input);

        if (++pi === 5) {
            thruster = input;
            pi = 0
        }
    }

    if (thruster > answer2) {
        answer2 = thruster;
    }
}

console.log(answer2);

