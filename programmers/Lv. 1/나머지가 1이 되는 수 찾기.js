// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한 사항
// 3 ≤ n ≤ 1,000,000

function solution(n) {
  let answer = 0;

  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break; // 가장 작은 수를 구하는 것이기 때문에 나머지가 1이 되는 수를 찾으면 바로 break
    }
  }

  return answer;
}

// 다른 사람의 풀이
// const solution = function(n) {
//     for (let i = 0; i < n; i++){
//         if (n % i == 1){
//             return i
//         }
//     }
// }
