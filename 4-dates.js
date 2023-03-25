let currentTime = Date.now() // The current time as the number
let date = new Date() // current date as the Date object
let dateValue = date.getTime() // time as milisecond value
let iso = date.toISOString() // ISO format string of current date

console.log("Today is " + iso);