// 짝수와 홀수

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

// 문제
// function solution(num) {
//     var answer = '';
//     return answer;
// }

// 사고회로
// 짝수일 경우와 홀수인 경우를 구분해야 하기 때문에 if else를 사용해야할 거 같고
// 입력받은 num의 데이터를 if를 사용해 나누기 2를 했을 때 나머지가 있는지 없는지로 구분해서 출력하면 될 거 같다

// 풀이
function solution(num) { 
    if (num % 2 == 0) {  // num을 나누기 2 했을때 나머지가 0 일 경우엔
       var answer = 'Even' // 0일 경우 = 즉 짝수일 때는 answer 에 Even 을 입력
    } else { // 그게 아닌 즉, 홀수일 경우에는
       var answer = 'Odd' // answer 에 Odd 입력
}
    return answer // answer 값을 출력
}


// 용어
// % : 나머지를 출력하는 함수


// 영어단어


// 생각정리 :
// 이건 푸는데 문제 없었다. 끄읏.