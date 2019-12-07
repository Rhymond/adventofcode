let data = require("./input");

const orbitTree = data => {
    let tree = [];
    data.forEach(v => {
        const objs = v.split(")");
        tree[objs[1]] = tree[objs[1]] || [];
        tree[objs[1]].push(objs[0]);
    });
    return tree;
};

const orbitCount = (tree, item) => {
    let count = 0;
    if (item in tree) {
        count++;
        tree[item].forEach(i => {
            count += orbitCount(tree, i);
        })
    }
    return count;
};

const orbitTrip = (tree, item) => {
    let i = tree2[item];
    let trip = [];
    while (i[0] in tree2) {
        if (i.length > 1) {
            console.log("SOMETHING WRONG");
        }
        trip.push(i[0]);
        i = tree2[i];
    }
    return trip;
};

let answer1 = 0;
let tree1 = orbitTree(data);
Object.entries(tree1).forEach(entry => {
    answer1 += orbitCount(tree1, entry[0]);
});

console.log(answer1);

let answer2 = 0;
let tree2 = orbitTree(data);
const you = orbitTrip(tree2, "YOU");
const san = orbitTrip(tree2, "SAN");
answer2 += you.filter(obj => san.indexOf(obj) === -1).length;
answer2 += san.filter(obj => you.indexOf(obj) === -1).length;
console.log(answer2);

