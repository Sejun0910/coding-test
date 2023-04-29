// 문자열 다루기 기본

// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// 문제
// function solution(s) {
//     var answer = true;
//     return answer;
// }

// 풀이
// function solution(s) {
//     var answer = true;
//     return answer;
// }

// 사고회로
// 입력받은 s의 길이가 4 나 6인지 if문 써서 확인하고 아니면 바로 false를 반환하고
// 길이가 4 나 6 이라면 s안에 숫자열만 들어가있는지 확인하고 맞으면 true 아니면 false를 반환

// 풀이
function solution(s) {
    if (s.length !== 4 && s.length !== 6) // 입력받은 s의 길이가 4인지 6인지 확인한다
    // === 가 아닌 !== 를 쓴 이유 : s.length 길이와 '4' 혹은 '6'이 같지 않은 경우를 확인하기 위해서
    // 즉, 문자열 's'의 길이가 4 혹은 6이 아닌 경우 false를 반환한다
        return false;
    for (let i = 0; i < s.length; i++) { // 이제 길이가 4 나 6인걸 확인했으니 안에 들어간게 숫자열인지만
        // 확인하면 된다
        if (isNaN(Number(s[i]))) // isNaN 함수를 이용해 이 값이 숫자로 변환이 가능한지 검사한다
        // s의 i번째 요소를 Neumber 를 사용해 숫자열로 바꾸고 이게 숫자로 변환이 가능한지 inNaN을 통해 확인
        // 숫자로 변환할 수 있는 값이 하나라도 있으면 false를 반환한다
        return false;
    }
    return true; // 모든 요소가 숫자라면 true를 반환한다
}


// 용어
// isNaN : 주어진 값이 숫자인지 판별하는 함수
// Number : 주어진 값을 숫자열로 바꾸는 함수


// 영어단어


// 생각정리
// 일단 길이가 맞은지 확인 후 안에 들어간 요소들이 숫자열인지 확인해주면 되기때문에(길이가 맞지않으면 false)
// Number 함수를 이용해 숫자열로 바꾸고 isNaN 으로 숫자로 변환이 가능한 값인지 확인후 모든 값이 숫자라면 true 아니라면 false