// 최소직사각형

// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
// 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 
// 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 
// 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
// 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// sizes의 길이는 1 이상 10,000 이하입니다.
// sizes의 원소는 [w, h] 형식입니다.
// w는 명함의 가로 길이를 나타냅니다.
// h는 명함의 세로 길이를 나타냅니다.
// w와 h는 1 이상 1,000 이하인 자연수입니다.

// 입출력 예
// sizes	result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133

// 입출력 예 설명
// 입출력 예 #1
// 문제 예시와 같습니다.

// 입출력 예 #2
// 명함들을 적절히 회전시켜 겹쳤을 때, 3번째 명함(가로: 8, 세로: 15)이 다른 모든 명함보다 크기가 큽니다. 
// 따라서 지갑의 크기는 3번째 명함의 크기와 같으며, 120(=8 x 15)을 return 합니다.

// 입출력 예 #3
// 명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기는 133(=19 x 7)입니다.

// 문제
// function solution(sizes) {
//     var answer = 0;
//     return answer;
// }

// 사고회로
// '긴 변'중 최대값, '짧은 변'중 최대값을 구해 곱하는 문제인 거 같다


// 풀이

let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
    let long = []; // long이라는 변수를 만들어서 그 안에 배열을 대입한다
    let short = []; // short라는 변수를 만들어서 그 안에 배열을 대입한다

    for(let i=0; i<sizes.length; i++){ // 입력받은 size안에 있는 배열을 찾아본다
        // for가 i = 0 일때 [60,50]을 본다는 뜻이고 [i][0]은 60을 [i][i]은 50을 의미한다 
        if(sizes[i][0]>sizes[i][1]){ // [i][0]이 [i][1]보다 클 경우 -> [60,50] 중에 60이 50이 더 크면이라는 뜻
            long.push(sizes[i][0]); //  [i][0]을 long에 push한다 push를 쓴 이유 : 배열을 추가할땐 push를 사용하는 게 좋다
            short.push(sizes[i][1]); // [i][1]을 short에 push 한다 
        }else{ // 그게 아니라면 : [i][0] 이 [i][1] 보다 작을 경우 -> 
            // 위 sizes 안에 있는 배열중 예를 들면 ex) [30,70]는 [i][0]보다 [i][1]이 더 크기 때문에 이럴 경우
            long.push(sizes[i][1]); // [i][1]을 long에 push 한다
            short.push(sizes[i][0]); // [i][0]을 sohrt에 push 한다
        }
    
    }
    let longsize = Math.max(...long); // for문을 돌려 변수 long에 담긴 제일 큰 값을 longsize 변수에 담는다
    let shortsize = Math.max(...short); // for문을 돌려 변수 sohrt에 담긴 제일 큰 값을 shortsize 변수에 담는다


    return longsize*shortsize ; // 그 값을 곱하고 출력한다
}

console.log(solution(sizes));


// 용어
// Math.max() : 주어진 매개변수에서 가장 큰 값을 찾아주는 함수


// 영어단어


// 생각정리
// 명함의 '긴 변' 중 가장 큰 숫자와 명함의 '짧은 변'중 가장 큰 숫자를 찾아서 곱하면 되는 문제이다
// 문제가 너무 어렵고 복잡해서 접근하는 법이 어려웠다