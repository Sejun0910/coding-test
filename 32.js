// 두 개 뽑아서 더하기

// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

// 문제
// function solution(numbers) {
//     var answer = [];
//     return answer;
// }

// 사고회로


// 풀이
function solution(numbers) {
    let answer =[]

    for(let i =0; i<numbers.length; i++){
        for (let j = i+1; j<numbers.length; j++){
      //반복하는 i의 수보다 한번 더 적게 반복하기 때문에 초기값 설정을 i+1 했다
        let a = numbers[i]+numbers[j]
        if(!answer.includes(a)){ //답에 a 값이 포함되지 않았다면 같은 값이 있다면 x
        answer.push(a)
        }
    }

    }
    answer.sort((a,b)=>a-b)
    return answer;
}


// 용어
// includes : 배열이 특정 요소를 포함하고 있는지 확인해주는 메소드

// 영어단어


// 생각정리
// 이중 for문을 이용해 두 개의 수를 뽑아 더할 수 있는 모든 경우의 수를 만들어 answer에 담고
// 담은 수를 sort를 이용해 오름차순으로 정렬해 return 했다