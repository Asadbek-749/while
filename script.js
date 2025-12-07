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
  // console.log(yigindi2);
}
console.log("Eng kichik k:", kson3 - 1);

// 14-masala
console.log("");
let ason1 = 5;
let kson4 = 0;
let yigindi3 = 0;

while (ason >= yigindi3) {
  kson4++;
  yigindi3 += 1 / kson4;
  // console.log(yigindi3);
}
console.log("Eng katta k:", kson4);

// 15-masala
let S = 200;
let p = 10;
let oy = 0;
let Summ = S;
while (2 * S >= Summ) {
  oy++;
  Summ *= 1 + p / 100;
}
console.log("Oylari:", oy);
console.log("Summa:", Summ);

// 16-masala
let L = 10;
let p1 = 25;
let sumL = L;
let kun = 0;

while (sumL < 200) {
  kun++;
  sumL *= 1 + p1 / 100;
}
console.log(kun, "kunda", parseInt(sumL) + " km masofa bosadi");

// 17-masala
let N = 20;
let M = 3;
let B = 0;
while (M <= N) {
  N = N - M;
  B++;
}
console.log("Butun qismi", B, "Qoldiq:", N);

// 18-masala
let N1 = 125;
let or = 0;
let teskariN1 = 0;

while (N1 > 0) {
  or = N1 % 10;
  N1 = parseInt(N1 / 10);
  teskariN1 = teskariN1 * 10 + or;
}
console.log("N ning teskarisi:", teskariN1);

// 19-masala
let N2 = 25780;
let or1 = 0;
let sumN2 = 0;

while (N2 > 0) {
  or1 = N2 % 10;
  sumN2 = sumN2 + or1;
  N2 = parseInt(N2 / 10);
}
console.log("N ning raqamlar yig'indisi:", sumN2);

// 20-masala, 21-masala
let n20 = 2223;
let ikkiBormi = false;
let toqBormi = false;

while (n20 > 0) {
  console.log(n20 % 10);

  if (n20 % 10 === 2) {
    ikkiBormi = true;
  } else if (n20 % 2 != 0) {
    toqBormi = true;
  }
  n20 = parseInt(n20 / 10);
}

if (ikkiBormi === true) {
  console.log("Ikki bor");
} else if (toqBormi === true) {
  console.log("Toq raqam bor");
} else {
  console.log("Ikki yo'q");
}


