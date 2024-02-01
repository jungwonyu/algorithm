// 문제 설명
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// -1,000 ≤ a, b ≤ 1,000

function solution(a, b, flag) {
    const tureVal = a + b;
    const falseVal = a - b;
    return flag == true ? tureVal : falseVal;
}

// 다른 사람의 풀이

// function solution(a, b, flag) {
//     return (flag)? a+b : a-b;
// }


// const solution = (a, b, flag) => flag ? a + b : a - b