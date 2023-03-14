// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ s1, s2의 길이 ≤ 100
// 1 ≤ s1, s2의 원소의 길이 ≤ 10
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

function solution(s1, s2) {
    answer = s1.filter(x => s2.includes(x)).length;
    return answer;
}


// 배열을 비교할 때: filter()와 includes()와 사용
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
// 원소의 개수를 구해야하므로 length 이용