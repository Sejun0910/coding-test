// 자연수 뒤집어 배열로 만들기

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 문제
// function solution(n) {
//     var answer = [];
//     return answer;
// }

// 사고회로
// 자연수를 배열로 나누고 순서를 뒤집어서 반환하면 될 거 같다


// 풀이
// function solution(n) {
//     var answer = [];
//     n = n + "";
//     for (var i = n.length -1; i>=0; i--) {
//         answer.push(Number(n[i]));
        
//     }
//     return answer
    
// }

let n = 12345

function solution(n) {
    return n.toString().split('').reverse().map(n => Number(n));
    // 입력받은 n을 toString을 사용해서 문자열로 바꾸고 split을 사용해 그걸 배열화시킨 다음에
    // reverse를 사용해 배열의 순서를 뒤집는다 그리고 map을 사용해 뒤집은 n을 숫자열로 바꾼다!
}

console.log(solution(n));

// 용어
// toString() : 숫자열을 문자열로 변환하는 메소드
// split() : 문자열을 일정한 구분자로 잘라서 배열로 저장하는 메소드
// reverse() : 배열의 순서를 뒤집는 메소드
// map() : 시퀸스의 각 항목에 대해 주어진 함수를 적용해 새로운 배열을 반환하는 메소드
// Number() : 문자열을 숫자열로 변환하는 메소드


// 영어단어


// 생각정리
// n의 입력받은 값은 숫자열이기 때문에 split로 나누고 reverse를 사용하려면 문자열로 바꿔줘야 한다는 것을 알게됐고
// 마지막엔 숫자열로 바꾸고 결과값을 출력해야 한다는 것을 알았다
// map쓰는법이 익숙하지가 않은데 이번에 연습을 해서 어떤 식으로 접근을 해야하는지 배웠다