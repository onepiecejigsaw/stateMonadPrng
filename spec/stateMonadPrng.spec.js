const RandomNumberGenerator = require("../src/stateMonadPrng");
const fc = require("fast-check");

describe("stateMonadPrng", () => {

    it("can create a new instance of RandomNumberGenerator", () => {
        const rng = new RandomNumberGenerator(1);
        expect(typeof rng).toBe("object");
    });

    it("can create a new instance of RandomNumberGenerator with method nextNumberAndState", () => {
        const rng = new RandomNumberGenerator(1);
        expect(typeof rng.nextNumberAndState).toBe("function");
    });

    it("nextNumberAndState returns an object containing a number called randomNumber", () => {
        const rng = new RandomNumberGenerator(1);
        expect(typeof rng.nextNumberAndState().number).toBe("number");
    });

    it("nextNumberAndState returns an object containing an object called nextState", () => {
        const rng = new RandomNumberGenerator(1);
        expect(typeof rng.nextNumberAndState().state).toBe("object");
    });

    it("can create a random number different to the seed passed in", () => {
        const rng = new RandomNumberGenerator(1);
        expect(rng.nextNumberAndState().number).not.toBe(1);
    });

    it("returns a different number if passed a different seed", () => {
        const rng1 = new RandomNumberGenerator(1);
        const rng2 = new RandomNumberGenerator(2);
        expect(rng1.nextNumberAndState().number).not.toEqual(rng2.nextNumberAndState().number);
    });

    it("returns the same number if passed the same seeds", () => {
        const rng1 = new RandomNumberGenerator(1);
        const rng2 = new RandomNumberGenerator(1);
        expect(rng1.nextNumberAndState().number).toEqual(rng2.nextNumberAndState().number);
    });

    // it("returns different numbers for 10,000 seeds", () => {
    //     let results = [];
    //     let seeds = [];
    //     runTests( (n, ctx) => {
    //         let result = createRandomNumber(n);
    //         if(seeds.indexOf(n) === -1) {
    //             ctx.log(seeds[results.indexOf(result)]);
    //             expect(results.indexOf(result)).toEqual(-1);
    //             seeds.push(n);
    //             results.push(result);
    //         }
    //     }, 1000);
    //     console.log(results);
    // });

});
