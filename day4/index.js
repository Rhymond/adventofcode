let sum1 = 0;
let sum2 = 0;
for (let x = 134792; x <= 675810; x++) {
  let pass = x.toString();
  if (pass !== pass.split('').sort().join('')) continue;

  const np = [...new Set(pass)];
  if (np.length < pass.length) {
    sum1++;
  }

  for (let i = 0; i <= np.length; i++) {
    if (pass.split('').filter(v => (v === np[i])).length === 2) sum2++;
  }
}

console.log(sum1);
console.log(sum2);
