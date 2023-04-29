// 완주하지 못한 선수

// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// 문제
// function solution(participant, completion) {
//     var answer = '';
//     return answer;
// }

// 사고회로
// participant랑 completion 를 비교해서
// participant 안에 있는 객체가 completion 안에 없다면 그걸 출력하면 될 거 같다


// 풀이
function solution(participant, completion) {
    var answer = '';
    participant.sort(); // 입력받은 participant 의 값을 오름차순으로 정렬
    completion.sort(); // 입력받은 completion 의 값을 오름차순으로 정렬
    for(var i=0; i<participant.length; i++){
        // participant의 배열을 다 돌면서
        if(participant[i] !== completion[i]){
            // 만약 participant 와 completion의 같은 인덱스를 비교했을 때 
            // participant 안에 completion 안에 있는 객체가 다를 경우
            answer = participant[i]; // 그 객체를 출력하고
            break; // 반복문을 종료
        }
    }

    return answer;
}


// 용어
// sort : 배열의 요소를 오름차순으로 정리하는 메소드


// 영어단어


// 생각정리
// 처음에 반복문과 if문은 제대로 작성했는데 결과가 계속 틀렸는데
// 반복문을 돌리기전에 sort를 사용해 오름차순으로 정리해야 같은 순서대로 비교가 되기 때문에
// sort을 사용하고 코드를 완성했다 어차피 없는 1개의 객체만 찾으면 되기 때문에
// sort로 정리해서 배열의 인덱스에 같은 객체가 아니라면 그게 정답이기 때문에 이게 맞는 코드다
// break를 쓴 이유는 break를 쓰지 않으면 정답인 1개의 객체가 빠지고 또 for문을 도는데
// sort로 정리를 했기 때문에 participant안에 있는 객체가 completion안에 있게 되더라도
// 배열의 인덱스 위치가 다르기 때문에 코드가 틀려지기 때문이다