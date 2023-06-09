// K번째수

// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 
// 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

// 문제
// function solution(array, commands) {
//     var answer = [];
//     return answer;
// }


// 사고회로
// array의 배열을 commands[0]의 i,j,k의 값에 맞춰서
// array의 배열 i번째부터 j번째까지 자르고 정렬한뒤 자른 k번째 숫자를 한 변수에 넣고
// 다시 commands[1]의 i,j,k의 값에 맞춰서 또 반복하면 된다
// 이것은 commands의 배열이 끝날 때까지 for문을 돌리면 될 거 같다 


// 풀이
function solution(array, commands) {
    var answer = [];
    var i = 0;
    var j = 0;
    var k = 0;

    for(m=0; m<commands.length; m++){ // commands 안에 있는 숫자로 우리가 array를 골라내야 한다
        i = commands[m][0]; // commands 의 [m][0] 번째를 i로 지정해 자르는 첫번째 부분으로 변수로 지정 
        j = commands[m][1]; // commands 의 [m][1] 번째를 i로 지정해 자르는 마지막 부분으로 변수를 지정
        k = commands[m][2]; // commands 의 [m][2] 번째를 k로 지정해 자른 부분의 원하는 k번째를 뽑는 용도로 지정

        var sliced = array.slice(i-1, j); // 입력받은 i와 j를 사용해 i번째부터 j번째까지 자르는 코드
        // i-1을 쓴 이유 : 우리는 숫자를 셀때 1부터 세지만 컴퓨터는 0부터 시작하기 때문에 우리가
        // 원하는 i번째부터 j번째를 오려내기 위해선 -1 을 붙여야 우리가 원하는대로 잘라낸다
        
        var sorted = sliced.sort((a,b) => a-b); // 자른 i번째부터 j번째를 배열안에 있는 숫자를
        // 오름차순으로 정렬한다 sort((a,b) => a-b) 의 의미 : 정렬 순서를 지정하는 함수로 숫자 배열의 경우
        // 숫자 값의 오름차순으로 정렬해달라는 의미다

        answer.push(sorted[k-1]); // answer = sroted[k-1]; 이렇게 하면 안되는 이유
        // -> = 를 사용하면 answer에 입력될 때 배열이 아닌 숫자로 들어가기 때문에 값이 덮어써진다
        // 그래서 push를 사용해서 넣어줘야 배열형태로 들어간다
    }   

    return answer;
}


// 용어
// slice : 배열의 일부분만 추출해서 새로운 배열로 만드는 메소드다
// sort : 배열의 요소를 정렬할 때 사용하는 메소드
// push : 배열의 끝에 하나 이상의 요소를 추가하는 메소드


// 영어단어


// 생각정리
// 우리가 원하는 건 i번째부터 j번째 사이의 k번째 요소를 알아야 하니
// 사고회로에 적어놨던대로 코드를 짜니 해결됐다 중간에 slice 뒤에 i-1을 왜 붙여야 하나
// 고민을 했는데 별건 아니였고 컴퓨터는 0부터 읽기 때문이다 그리고
// push는 값을 저장할 때 배열로 저장한다는 것을 알게됐다
// 처음에 push를 안 쓰고 코드를 만들어 실패했었다