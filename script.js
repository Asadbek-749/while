// 4-masala
let n = 9;
let x = 1;
while (x < n) {
  x = x * 3;
}

if (x == n) {
  console.log("3 ning darajasi");
} else {
  console.log("3 ning Darajasi emas");
}

// 5-masala
let n1 = 16;
let k = 1;
let darajasiK = 0;
while (k < n1) {
  k = k * 2;
  darajasiK++;
}
if (k == n1) {
  console.log("K soni", darajasiK);
} else {
  console.log("2 ning darajasi emas");
}

// 6-masala
let n2 = 9;
let i = n2;
let natija = 1;
while (i > 0) {
  natija = natija * i;
  i = i - 2;
  //   console.log(natija, i);
}
console.log(natija);

// 7-masala
let n3 = 20;
let kv = 1;
while (n3 > kv ** 2) {
  kv++;
}
console.log(kv);

// 8-masala
let n4 = 36;
let kv1 = 1;
while (n4 >= kv1 ** 2) {
  kv1++;
}

console.log(kv1 - 1);

// 9-masala
let n5 = 9;
let k2 = 1;
while (3 ** k2 < n5) {
  k2++;
}
console.log(k2);

// 10-masala
let n6 = 9;
let k3 = 1;
while (3 ** k3 <= n6) {
  k3++;
}
console.log(k3 - 1);

// 11-masala
let nson = 37;
let kson = 0;
let yigindi = 0;

while (yigindi < nson) {
  kson += 1;
  yigindi += kson;
  console.log("k:", kson, "yigindi:", yigindi);
}

console.log("Eng kichik k:", kson);

// 12-masala
let nson1 = 37;
let kson2 = 0;
let yigindi1 = 0;

while (yigindi1 <= nson) {
  kson2 += 1;
  yigindi1 += kson2;
  console.log("k:", kson2, "yigindi:", yigindi1);
}
console.log("Eng katta k:", kson2 - 1);

// 13-masala
console.log("");
let ason = 5;
let kson3 = 0;
let yigindi2 = 0;

while (ason > yigindi2) {
  kson3++;
  yigindi2 += 1 / kson3;
  console.log(yigindi2);
}
console.log("Eng kichik k:", kson3-1);

// 14-masala
console.log("");
let ason1 = 5;
let kson4 = 0;
let yigindi3 = 0;

while (ason >= yigindi3) {
  kson4++;
  yigindi3 += 1 / kson4;
  console.log(yigindi3);
}
console.log("Eng katta k:", kson4);

// 15-masala
