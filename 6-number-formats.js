let n = 12546.1245;
// display the number in different base and radix
console.log(n.toString(2));
console.log(n.toString(8));
console.log(n.toString(16));

// change the decimal points and precision
console.log(n.toFixed(2));
console.log(n.toFixed(0));
console.log(n.toExponential(3));
console.log(n.toExponential(1));
console.log(n.toPrecision(5));

// type casting implicitly
console.log("\n");
console.log("5" + "7");
console.log(5 + "7");
console.log("7" + 5);
console.log(7 - "5");
console.log(7 - "shav" + " objects");

// pasring numbers
let x = parseInt(" 45")
console.log(x);

let y = parseFloat("$78.145")
console.log(y);

// object to primitive conversion
console.log(Number([45]));
console.log(Number([]));

let date = new Date(2020, 1, 2);
console.log(date);
console.log(date.valueOf());
console.log(date.toString());
console.log(String(date));


console.log([1, 2, 3].toString());
console.log([1, 2, 3]);

if (date === date.valueOf()){
    console.log("this is truthy value");
}
else{
    console.log("this is falsy value");
}
