const createRandomNumber = require("../src/prng");
const fc = require("fast-check");

describe("prng", () => {

    const runTests = (predicate, numRuns) => {
        fc.assert(
            fc.property(fc.integer(0, 1000000000), fc.context(), predicate)
            , {numRuns: numRuns, verbose: true}
        )
    };

    describe("#when generating a random number", () => {

        it("returns a number between 0 and 1", () => {
            const result = createRandomNumber(1);
            expect(result >= 0 && result <= 1).toBeTruthy();
        });

        it("returns a different number if passed a different seed", () => {
            const result1 = createRandomNumber(1);
            const result2 = createRandomNumber(2);
            expect(result2).not.toEqual(result1);
        });

        it("returns the same number if passed the same seeds", () => {
            const result1 = createRandomNumber(1);
            const result2 = createRandomNumber(1);
            expect(result2).toEqual(result1);
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
});
