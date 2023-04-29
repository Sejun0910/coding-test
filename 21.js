// 이상한 문자 만들기

// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예

// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 
// 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// 문제
// function solution(s) {
//     var answer = '';
//     return answer;
// }

// 사고회로
// 입력받은 문자열을 for문으로 나누면서 2로 나웠을 때 0이 되면 짝수이기 때문에 대문자로
// 안되면 홀수이기 때문에 소문자로 바꿔서 출력하면 될 거 같다


// 풀이

var s = "try hello world"

function solution(s) {
    var answer = ''; // 아무 값도 없는 빈 변수를 만든다
    var result = s.split(' '); // 입력받은 s를 split에 세퍼레이터 함수에 (' ') 공백을 넣으면 문자열을 단위로 자른다
    // 그렇게 되면 s = ["try" , "hello" , "world" ] 로 분할된다 그걸 새로운 변수 result에 담는다

    for(let i = 0; i< result.length; i++){ // i를 result의 길이만큼 돌린다
        // 현재 result 안에는 ["try" , "hello" , "world" ] 가 들어있다
        for(let j = 0; j< result[i].length; j++){ // j를 result의 길이 문자열 0부터 j가 result의 길이보다
            // 작을 때까지 돌린다
            // 현재 result[i]가 ["try" , "hello" , "world" ] 가 있기 때문에 try 의 t가 문자열 0이니까
            // j를 돌릴때 t시작 문자열 0번의 시작이다
            if(j % 2 === 0){ // [j]를 돌린 것을 나누기 했을 때 값이 0이라면 
                // 왜 == 말고 ===를 써야 하는 이유 : ==를 쓰게되면 j % 2 가 0, 1, -1중 어느 것이든
                // true로 인식하게 되기 때문에 정확한 값을 알기위해 ===을 사용해서 엄격한 비교를 해야한다
                answer += result[i][j].toUpperCase(); // result [i]의 [j]번째를 대문자로 바꿔서 넣어달라
            } else { // 그게 아니라면
                answer += result[i][j].toLowerCase(); // result [i]의 [j]번째를 소문자로 바꿔서 넣어달라
            }
        }
        if (i < result.length -1){ // i가 끝날 때마다 공백을 넣기 위해 쓴 코드
            // -1 을 쓴 이유 : 마지막 단어가 끝날때는 공백 문자열을 쓰지않아야 하기 때문에 -1을 넣어줬다
            // -1 을 안 쓰게 되면 "TrY HeLlO WoRlD " 
            answer += ' '; // i를 돌 때마다 공백을 추가
        }
    }
    
    
    
    return answer;
}

console.log(solution(s));


// 용어
// split : 문자열을 배열로 변환하는 메소드이다 (문자열을 잘라서 배열로 저장)
// toUpperCase : 입력받은 문자열을 대문자로 변환하는 메서드
// toLowerCase : 입력받은 문자열을 소문자로 변환하는 메서드


// 영어단어


// 생각정리
//