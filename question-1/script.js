/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */


steps = function step(N) {
    let step_max = 0;
    let step_one = 1;
    let step_two = 2;
    if (N === 1) {
        return 1;
    }
    if (N === 2) {
        return 2;
    }
    for (let index = 3; index <= N; index++) {
        step_max = step_one + step_two;
        step_one = step_two;
        step_two = step_max;
    }
    return step_max;
}

const N = steps(100);

// console.log(N);

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)
