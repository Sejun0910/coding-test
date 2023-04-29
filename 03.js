// 가운데 글자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// 문제
// function solution(s) {
//     var answer = '';
//     return answer;
// }

// 사고회로
// 홀수일땐 1개만 출력하면 되기 때문에 나누기 2를 하고 소수점 버린값의 인덱스 번호만 출력하면 되지만 (나누기 2를 해서 소수점을 버린 인덱스 번호를 쓰는 이유 : 컴퓨터는 1이 아닌 0부터 시작하기 떄문에)
// 짝수일땐 2개를 출력해야 하기 때문에 입력받은 인덱스를 나누기 2를 해서 나온 인덱스 값과 나누기를 사용해 나온 값의 -1을 사용해 2개를 출력하게 만들면 될 거 같다
// 삼항연산자를 사용해 구분하면 좋을 거 같다

// 풀이
function solution(s) {
    const sl = Math.floor(s.length / 2); 
    // 입력받은 s의 길이의 가운데 인덱스 번호를 구해야한다
    // Math.floor : 소수점 버리는 함수     홀수일때 소수점을 버리는 함수를 이용함
    // 이걸 하는 이유 : 짝수일때 2개를 출력해야하니까 나누기 2를 해서 나온 숫자의 전 인덱스 번호를 알기 위해서


    return s.length % 2 === 0 ? s[sl - 1] + s[sl] : s[sl];
    // 입력받은 s의 길이가 나누기 2를 했을때 나머지 값이 0 이냐?(짝수냐고 묻는 질문) ->
    // (0이면 짝수가 맞으니 중간글자 2개를 출력해야 하기 때문에 ) s의 sl값의 - 1 과 s의 sl값 을 출력하고 
    // (0이 아니라면 홀수가 맞으니 중간글자 1개를 출력해야 하니까) 그게 아니라면 s의 sl값을 출력
}

console.log(solution("12345")); // 3 이 출력
console.log(solution("1234")); // 23 이 출력

// 용어
// Math.floor : 소수점을 버리는 함수
// a==0 ? true : false :  ? 는 왼쪽에 있는 a가 0 이 맞냐 라는 질문이고 맞다면 true를 출력 아니라면 false를 출력
// % : 나머지를 출력하는 함수


// 영어단어


// 생각정리 : 문제를 푸는데 힘들었던 건 아니었는데 풀기전에 머릿속에 정리하는 시간이 조금 걸렸다