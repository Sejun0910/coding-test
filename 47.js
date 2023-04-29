// 소수 찾기

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

// 입출력 예
// n	result
// 10	4
// 5	3

// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

// 문제
// function solution(n) {
//     var answer = 0;
//     return answer;
// }

// 사고회로


// 풀이
function solution(n) {
    // 소수 리스트 담을 배열 생성
    let arr = [];
    
    // 0과 1을 제외한 2부터 n까지 배열에 담아줍니다.
    for(let i=2; i<=n; i++) {
        arr[i] = i;
    }
    
    for(let i=2; i<=n; i++) {
        if(arr[i]===0) continue; // 
        for(let j=i*2; j<=n; j+=i) {
            arr[j] = 0;
        }
    }
    
    // filter를 이용해 0이아닌 수들의 개수를 return합니다.
    return arr.filter(v => v!==0).length;
} 


// 용어


// 영어단어


// 생각정리