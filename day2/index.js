const input = require("./input");

const getResult = (n, v) => {
    const inp = [...input];

    inp[1] = n;
    inp[2] = v;
    let i = 0;
    let val = inp[i];

    while (val !== 99) {
        val = inp[i];
        if (val === 1 || val === 2) {
            let num1 = inp[inp[i + 1]];
            let num2 = inp[inp[i + 2]];
            inp[inp[i + 3]] = val === 1 ? num1 + num2 : num1 * num2;
            i = i + 3;
        }
        i++
    }

    return inp[0];
};

console.log(getResult(12, 2));

for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
        let result = getResult(n, v);
        if (result === 19690720) {
            console.log(100 * n + v);
            break;
        }
    }
}
