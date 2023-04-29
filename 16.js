// 문자열 내 p와 y의 개수

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// 문제
// function solution(s){
//     var answer = true;

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')

//     return answer;
// }

// 사고회로
// 입력받은 s에 있는 p의 개수와 y의 개수를 구분해서 같으면 true 없으면 flase 하지만 둘다 없으면 true를 출력하면 됨
// 주의할 건 대소문자 구별하지 않는다


// 풀이

function solution(s){
    let p = 0; // 변수 p를 선언하고 p안에 0을 대입한다.
    let y = 0; // 변수 y를 선언하고 y안에 0을 대입한다.
    for(let i=0; i<s.length; i++){ // 변수 i를 선언하고 i안에 0을 대입한 후에
      // i를 s의 길이까지 for문을 이용해 i를 계속해서 1씩 추가하며 돌릴 것이다
        if(s[i]==="p"||s[i]==="P"){ // 만약 s안에 i가 돌면서 소문자 p나 대문자 P가 있으면
            p++; // 위에서 선언한 변수 p안에 1를 계속해서 대입한다
        } else if(s[i]==="y"||s[i]==="Y") { // 만약 s안에 i가 돌면서 소문자 y나
          // 대문자 Y가 있으면 
            y++; // 위에서 선언한 변수 y안에 1를 계속해서 대입한다
        }
        
        
    }
    return p === y ? true : false; // 변수p 와 변수y 의 개수가 같으냐? 같다면 true 아니면 false를 반환
    
}



// 용어


// 영어단어


// 생각정리
// 저번에 풀었던 문제인데 막힘없이 풀지 못했다 난 혼나야한다