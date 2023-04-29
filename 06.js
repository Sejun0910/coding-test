// 없는 숫자 더하기

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

// 입출력 예 설명
// 입출력 예 #1
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

// 입출력 예 #2
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// 문제
// function solution(numbers) {
//     var answer = -1;
//     return answer;
// }

// 사고회로
// if문을 통해 number 객체 안에 1~9 사이의 매개변수가 없을 경우 for으로 그 값을 변수 하나를 만들고
// 거기안에 넣고 더하면서 for문이 끝날 때 출력

// 풀이
function solution(numbers) {
    let answer = 0; // answer라는 변수를 만들어 0이라는 데이터 값을 넣고
    for (let i = 1; i <= 9; i++) { // i라는 변수를 선언하고 0이 아닌 1을 넣는 이유는 ? : 0은 더해도 0이기 때문에 필요x
        // 그리고 최대 9까지니 i는 9보다 작거나 같을때까지 i에 1씩 넣어줄 거다 
        if (!numbers.includes(i)) answer += i; // 1씩 넣은 i를 입력받은 number에 includes를 이용해 i가 있는지 확인할 수 있고
        // i가 있다면 그 i를 answer에 계속 더한다
    }
    return answer;
}

// console.log(solution("5,6")); // 34 출력



// 용어
// includes() : 배열이 특정 요소를 포함하고 있는지 판별하는 함수

// 영어단어


// 생각정리
// 문제를 풀어보기전에 어떤 방식으로 접근할지 생각하는 건 쉬웠는데
// includes 라는 함수를 몰라서 구글링을 통해 찾아서 해결했다
