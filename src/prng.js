    const createRandomNumber = (seed) => {
        return 1/(seed << 23);
    };



module.exports = createRandomNumber;

console.log(createRandomNumber(712346116));
console.log(createRandomNumber(4));
console.log(createRandomNumber(1));
console.log(createRandomNumber(513));
console.log(createRandomNumber(1));
console.log(512 << 23);

let results = [];
for(let i = 0; i < 100000000; i++) {
    if(results.indexOf(createRandomNumber(i)) > -1) {
        console.log(i);
        break;
    }
    results.push(createRandomNumber(i));
}
