const pixels = require("./input");
const wide = 25;
const tall = 6;
const layers = [];

for (let i = 0; i < pixels.length / (wide * tall); i++) {
    layers.push(pixels.slice(i * (wide * tall), (i+1) * wide * tall))
}

const lengths = layers.map(v => v.split('').reduce((a, d) => {
    a[d] = a[d] || 0;
    a[d]++;
    return a;
}, []));

const lowestZero = Math.min(...lengths.map(v => v['0']));
const val = lengths.find(v => v['0'] === lowestZero);
console.log(val[1] * val[2]);


let image = Array(wide * tall).fill(2);
layers.forEach(layer => {
    layer.split('').forEach((pixel, index) => {
        if (image[index] === 2) {
            image[index] = parseInt(pixel);
        }
    });
});

image = image.map(v => v === 1 ? "*" : " ");

for (let i = 0; i < tall; i++) {
    console.log(...image.slice(i * wide, (i + 1) * wide));
}

