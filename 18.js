// 서울에서 김서방 찾기

// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

// 문제
// function solution(seoul) {
//     var answer = '';
//     return answer;
// }

// 사고회로
// seoul안에 kim이 있는 인덱스 번호를 찾아서 출력하면 되기 때문에
// for문으로 seoul안에 있는 인덱스를 돌리고 if로 만약 그 인덱스에 kim이 있을 경우
// answer에 담아서 return 하면 될 거 같다


// 풀이
function solution(seoul) {
    var answer = '';
    for(var i = 0; i<seoul.length; i++) { // seoul안에 있는 인덱스를 for로 돌리기
        if(seoul[i] == "Kim") { // seoul 안에 있는 i번째 인덱스에 kim이 있으면
            answer = i; // answer에 그걸 담는다
            break; // break 를 쓰는 이유 : break를 안 쓰면 Kim을 찾아도 남은 인덱스가
            // 있으면 그걸 끝까지 다 돌기 때문에 효율성이 떨어짐
        }
    }
    return '김서방은 '+answer+'에 있다';
}

// 용어


// 영어단어


// 생각정리
// break 를 쓰는 거까진 생각을 하지 못했는데 break를 쓰지 않으면
// 내가 찾고 싶은 Kim이 0번 인덱스에 있어서 찾아서 answer에 담더라도
// 남은 인덱스가 있을 경우 우린 for을 사용했기에 모두 돌기 때문에
// 효율성이 떨어진다는 것을 알았다.