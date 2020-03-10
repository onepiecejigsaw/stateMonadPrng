class RandomNumberGenerator {
    constructor(seed) {
        this.nextNumberAndState = function() {
            var seed2 = 1/(seed * 16807 % 2147483647);
            return  {number: seed2, state: new RandomNumberGenerator(seed2)}
        }
    }
}

module.exports = RandomNumberGenerator;

let rng = new RandomNumberGenerator(1);
let state1 = rng.nextNumberAndState();
let state2 = state1.state.nextNumberAndState();
let state3 = state2.state.nextNumberAndState();
console.log(state1.number);
console.log(state2.number);
console.log(state3.number);
