const fs = require('fs');
const [nString, ...wordslst] = fs.readFileSync("example.txt").toString().trim().split("\n");
// const [nString, ...wordslst] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(nString);
const words = [...new Set(wordslst)];

words.sort((a, b)=> {
    if (a.length !== b.length) {
        if (a.length < b.length) {
            return -1;
        }
        return 1;
    } else {
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0;
    }
});

words.forEach(word => {
    console.log(word);
});