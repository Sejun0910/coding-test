// 하샤드 수

// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false

// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
// 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

// 문제
// function solution(x) {
//     var answer = true;
//     return answer;
// }

// 사고회로
// 입력받은 x을 문자열로 나눠서 인덱스 번호마다 다 더해 한 변수에 저장하고
// 그 값을 입력받은 x를 다 더한 변수로 나눴을 때 0이 되는지 안 되는지 판별하는
// 코드를 짜면 될 것 같다

// 풀이
var x = 13

function solution(x) {
    var answer = 0; // answer변수에 0을 대입하고 선언한다
    var n = 0; // n이라는 새로운 변수에 0을 대입하고 선언한다
    x = String(x); // 입력받은 x는 문자열로 바꿔준다
    // 문자열로 바꾸는 이유 : for문을 돌리기 위해

    for(var i = 0; i<x.length; i++){ // x의 문자열 길이만큼 돌린다
        n += Number(x[i]); // x의 문자열을 숫자열로 바꾸면서 n에 넣는다 
        // x의 숫자를 하나씩 다 더하는 코드이다 ex) x가 11 이라면 1+1 123이라면 1+2+3
    }

    answer = x % n == 0 ? true : false // x를 n로 나눴을 때 나머지가 0이면 true 아니면 false
    // 나머지가 0 이면 하샤드의 수 임으로 true , 0이 아니라면 아니기에 false를 출력

    return answer;
}

console.log(solution(x));

// 용어


// 영어단어


// 생각정리
// 우리가 for문을 돌릴땐 숫자열이 아닌 문자열로 돌려야 하는 것을 알게됐고
// 한 변수에 값을 더할 땐 숫자열로 변환하며 담아야 우리가 원하는 인덱스를 다 합친 결과를
// 얻을 수 있다는 것을 알게됐다