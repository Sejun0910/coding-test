// 자릿수 더하기

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
// N	answer
// 123	6
// 987	24

// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

// 문제
// function solution(n)
// {
//     var answer = 0;

//     console.log('Hello Javascript')

//     return answer;
// }


// 사고회로
// 입력받은 n을 문자열로 바꾸고 for문을 돌려 차례대로 한 변수에 숫자열로 바꿔서 더하면서 넣으면 될 거 같다

// 풀이
function solution(n)
{
    var answer = 0;
    n = n.toString(); // 입력받은 n을 문자열로 바꿔준다
    // 문자열로 바꾸는 이유 : 숫자열 상태로 for문을 돌리면 자리의 각 숫자를 읽을 수가 없기 때문에
    // 문자열로 바꾸고 for문을 돌려야 한다

    for(let i =0; i<n.length; i++){
        answer += Number(n[i]) // 입력받은 n의 0번부터 for문이 끝날 때까지 answer에 숫자열로 바꾸면서 넣어준다
        // 그래야 값이 더해지기 때문에 Number을 쓰지 않으면 값이 더해지지 않음
    }    

    return answer;
}


// 용어
// toString() : 입력받은 값을 문자열로 바꾸는 메소드
// Number() : 입력받은 값을 숫자열로 바꾸는 메소드


// 영어단어


// 생각정리
// for 문을 돌릴 때 숫자열의 상태로 들어가면 입력받은 숫자의 각 자리에 접근하지 못하기 때문에 문자열로 바꾸고
// 변수에 넣을 때 총 값을 구해야 하기 때문에 for문에서 나갈 때 숫자열로 바꾸면서 넣어야 한다