// basic arithmatics
console.log(3+5);
console.log(8-5);
console.log(4*8);
console.log(8/3);
console.log(8%3);

// advanced arithmatrics with Math global object
console.log(Math.pow(4, 1/3)); 
console.log(Math.round(.333));
console.log(Math.ceil(0.4));
console.log(Math.floor(1.2));
console.log(Math.sin(4.55));

 // get random numebers between 0 and 1.0
let randomNum = Math.random();
let maxNum = Math.max(4,5,6);

console.log("random number is " + randomNum);
console.log("Max: " + maxNum);

// get the log of base 10
let logValue = Math.log(100) / Math.LN10;
console.log("log of 100: " + logValue);

// truncate the floating point number
let number = Math.trunc(4.548);
console.log(number);

// special values // overflow // underflow // undefined values
let infinity = Infinity
let negInfinity = -Infinity
let undefinedValue = NaN

console.log(1/0);
console.log(0/0);

// parse the string values as integers and floating poitn numbers
let aNumber = Number.parseInt("45");
let aValue = Number.parseFloat("78.245");
console.log(aValue);

console.log("\nMAX: " + Number.MAX_SAFE_INTEGER + " MIN: " + Number.MIN_SAFE_INTEGER + " small diff: " + Number.EPSILON);

// Big Integers // for monetary calculations with high precision and accuracy
let aBigInt = 1_000_000n;  // followed by a simple charcter n
let aBigInt2 = BigInt(45_000_000_000);
let aBigInt3 = BigInt("1" + "0".repeat(100))

console.log(2500n + 58444n);
console.log(45879n / 45n);
console.log(45879n % 45n);