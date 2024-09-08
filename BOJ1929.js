const fs = require('fs');
const [aString, bString] = fs.readFileSync('example.txt').toString().split(' ');
// const [aString, bString] = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(aString, 10);
const b = parseInt(bString, 10);

const arr = [];

for (let i = a; i <=b; i++) {
    arr.push(i);
}

console.log(arr);