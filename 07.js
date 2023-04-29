// 음양 더하기

// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

// 입출력 예 설명

// 입출력 예 #1
// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.

// 입출력 예 #2
// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

// 문제
// function solution(absolutes, signs){
//     var answer = 123456789;
//     return answer;
// }

// 사고회로
// 입력받은 숫자와 불리언 배열을 비교해서 true면 + 로 넣고 false면 - 로 넣어주면
// 되기 때문에 숫자를 받은 매개변수와 불리언을 받은 매개변수의 같은 인덱스끼리 비교해서
// 삼항연사자를 이용해 숫자를 받은 인덱스 0번째의 숫자가 불리언 배열을 받은 인덱스 0번째에
// ture면 + 로 누적하고 false라면 - 로 누적해서 어느 한 변수에 넣어서 for문을 돌리고
// 끝나면 그 변수를 출력하면 된다

// 풀이
function solution(absolutes, signs) {
    var answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
        // for문으로 absolutes의 인덱스 0번부터 absolutes의 길이까지 돌릴건데
        // absolutes 와 signs 의 같은 인덱스 번호끼리 비교해서
        // signs에 들어있는 값이 참이면 answer에 양수로 넣을거고
        // signs에 들어있는 값이 거짓이면 answer에 음수로 넣을 것이다
    }
    return answer;
}

// 용어
// 삼황연산자 : 조건에 따라(참이냐 거짓이냐에 따라) 값을 선택하는 연산자
// 삼황연산자 쓰는법 -> 조건 ? 참 : 거짓


// 영어단어


// 생각정리
// 입력받은 absolutes 와 signs 의 배열이 차례대로 담기기 때문에
// 같은 인덱스끼리 비교해서 삼황연산자를 사용해서
// ture인지 false인지 체크해 양수로 넣을지 음수로 넣을지 구분해서 넣으면 된다.