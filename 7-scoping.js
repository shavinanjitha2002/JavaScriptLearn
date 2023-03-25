
const x = 5;
if (x > 2){
    const x = 45;
    console.log(x);
}
console.log(x);

// destructuring the arrays and objects
let [a, b] = [1, 2];
[a, b] = [a+1, b+2];
// swap the values
[a, b] = [b, a]
console.log(a, b);

let [p, q, r] = [1, 2]
console.log(r);

[p, q] = [7, 8, 9];
console.log(p, q);

[, p, , q] = [1, 2, 3, 4]
console.log(p, q);

[p, ...q] = [1, 2, 3, 4, 5, 6]
console.log(p, q);