// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

function solution(n) {
    let answer = 0;
    let nString = n.toString(); // 문자열 변환
    for (let i = 0; i < nString.length; i++) { // 문자열의 길이만큼 반복
        answer += parseInt(nString[i]); // 문자열을 숫자로 변환 후 더하기
    }
    return answer;
}

// n을 문자열로 변환하는 이유? n의 자릿수를 알기 위해서

// 다른 사람 풀이


function solution(n) {
  return n
    .toString() // 문자열로 변환
    .split("") // 문자열을 배열로 변환
    .reduce((acc, cur) => acc + Number(cur), 0); // 배열의 요소를 순회하며 더하기 (초기값 0) 
}

// 참고
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
// reducer() 함수는 네 개의 인수를 가짐 (누산기acc, 현재값cur, 현재 인덱스idx, 원본 배열src)