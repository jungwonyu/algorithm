// n숫자까지 모든 숫자들을 1부터 시작해서 차례대로 더하는 함수

// add_up_to_slower

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Time Elapsed: 0.1280000000000001 seconds.

// add_up_to_faster

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

// Time Elapsed: 0.0000000000000001 seconds.
