// 두 정수 사이의 합

// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// 문제
// function solution(a, b) {
//     var answer = 0;
//     return answer;
// }

// 사고회로
// 음 일단 a가 클지 b가 클지 대소관계가 없기 때문에 if을 이용해서 a가 클 경우와 b가 클 경우를 구분해야 할 거 같고
// a가 b보다 더 크다면 b에 1씩 더한 값을 for을 이용해서 변수를 하나 만들고 b에 1씩 더한 값을 그 안에 더하면서 넣어야 할 거 같다
// 반대로 b가 a보다 더 크다면 a에 1씩 더한 값을 for을 이용해 변수를 하나 만들고 a에 1씩 더한 값을 만든 변수 안에 더하면서 넣고 출력
// a와 b가 같은 수도 있으니 if를 쓸때 크거가 같다는 등호를 사용해야 할 거 같다

// 풀이
function solution(a, b) {
    var answer = 0; // answer이라는 변수를 선언해 0을 넣고
    if(a>=b){ // 만약 입력받은 a가 b보다 크거나 같을 경우 아래 반복문 실행
        for(let i=b; i<=a; i++){ // i에 b의 데이터를 넣고 i가 a보다 작거나 같을 때까지 1을 반복해서 넣을거다
            answer+=i; // 그 값을 넣은 i를 반복해서 실행할때마다 answer 에 계속 더하면서 넣는다
        }
    }else{ // 그게 아니라면 (입력 받은 a가 b보다 크거나 같지 않을 경우. a가 b보다 더 작을 경우를 말한다)
        for(let j=a; j<=b; j++){ // j에 a의 데이터값을 넣고 j가 b보다 작거나 같을 때까지 1을 반복해서 넣는다
            answer+=j; // 그 값을 넣은 j를 반복해서 실행 할때마다 answer 에 계속 더하면서 넣는다
        }
    }
    return answer; // 다 더한 answer의 값을 출력한다
}

// 용어


// 영어단어


// 생각정리
// 대소 관계가 없기 때문에 a가 클지 b가 더 클지 모르기 때문에 if를 쓰고
// a 와 b 사이에 값을 계속 더하면서 결과값을 가져와야 하기 때문에 for문을 쓴다
// 그리고 a 와 b의 값이 같을 수도 있기 때문에 for문을 쓸때 조건식에 같다는 = 의 기호를 사용해야한다