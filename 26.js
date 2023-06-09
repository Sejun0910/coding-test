// 제일 작은 수 제거하기

// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// 문제
// function solution(arr) {
//     var answer = [];
//     return answer;
// }

// 사고회로
// 입력받은 arr에서 splice로 제일 작은 인덱스를 찾아 제거하면 될 거 같다


// 풀이
var arr = [4,3,2,1,1]

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    // arr의 indexOf를 사용해 인덱스를 지정할건데 Math.min 제일 작은 수의 하나를 찾아라
    // ...arr중에서 찾아라 그리고 , 1 은 1개만 찾겠다 그리고 그 찾은 수를 splice를 사용해 지운다
    return arr.length ? arr : [-1]; 
    // arr의 길이가 참이면의 의미 : 하나 지운 arr의 길이가 0이 아니라면 즉, 안에 비어있지 않다면
    // 지우고 남은 arr들을 반환
    // arr의 길이가 거짓이면의 의미 : 하나 지운 arr의 길이가 0이라면 즉,
    // splice를 통해 하나를 지웠는데 지웠더니 arr이 하나도 없는 경우를 말함. 
    // arr안에 하나의 숫자밖에 없었던 것. 그럼 [-1]을 출력


}

console.log(solution(arr))


// 용어
// splice : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하는 메소드
// indexOf : 주어진 값의 위치를 검색해서 반환하는 메소드이다
// Math.min : 전달된 인자 중 가장 작은 값을 반환하는 함수이다


// 영어단어
// min : min은 minify 축소하다의 줄임말이다


// 생각정리
// 우리가 원하는 건 삭제이니 splice를 사용할 것이고
// 원하는 인덱스를 찾아야 하니 먼저 indexOf를 사용하고
// Math.min을 사용해 그 중 제일 작은 수를 찾아내서
// splice를 통해 삭제를 해야한다
// indexOf 와 Math.min 을 사용해본적은 없었는데 어떤식으로 사용 할 수 있는지 알게됐다