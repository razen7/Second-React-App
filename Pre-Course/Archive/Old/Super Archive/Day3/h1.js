let a = (80 * 2) % 13 + 30 / (5 * 3);
let b = (3 + a % 4) / (a - 1);
console.log(a, b);

/*
Line 1
(80 * 2) % 13 + 30 / (5 * 3)
(160) % 13 + 30 / (5 * 3)
160 % 13 + 30 / 15
4 + 30 / 15
4 + 2
6

Line 2
(3 + a % 4) / (a - 1);
(3 + 6 % 4) / (6 - 1);
(3 + 2) / (6 - 1);
5 / (6 - 1);
5 / 5;
1
*/