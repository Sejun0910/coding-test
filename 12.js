// 부족한 금액 계산하기

// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 
// 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

// 입출력 예
// price	money	count	result
// 3	20	4	10

// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

// 참고 사항
// 미션 언어는 Java, JavaScript, Python3, C++ 만 해당 됩니다.
// 같은 코드를 제출한 사람이 여럿이라면 코드를 가장 먼저 제출한 분께 상품을 드립니다.
// 좋아요 수가 동일할 경우 코드를 가장 먼저 제출한 분께 상품을 드립니다.

// 문제
// function solution(price, money, count) {
//     var answer = -1;

//     return answer;
// }

// 사고회로
// 총 필요한 놀이기구의 이용 금액을 먼저 계산하고, 총 이용 금액에 내가 가지고 있는 돈을 빼서
// 우리가 찾아야 하는 결과값인 부족한 금액을 구할 수 있고 그래야 부족하면 부족한 금액을, 
// 부족하지 않으면 0을 return하면 되기 때문이다

// 풀이
function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) { // 놀이기구를 탄 횟수만큼 원래 가격을 곱해서 총 비용에 넣어야 하기 때문에 만듦  
      totalPrice += i * price;  // 탄 횟수만큼 가격에 곱하면서 반복할때마다 총가격에 더하는 코드
    }
    return money > totalPrice ? 0 : totalPrice - money; // 내가 가진 돈이 놀이기구를 내가 타고 싶은 만큼 탔을 때
    // 내가 가진 돈이 총 가격보다 크냐?(내가 가진 돈이 더 많을 경우를 말함) 
    // 맞다면(true) 0을 아니라면(false라면) 총 가격에서 내 가진 돈을 뺀 가격을 리턴해서 출력
    // false의 위치에 들어간 코드 설명 : 총가격에서 내가 가진 돈을 빼면 부족한 금액을 알 수 있기 때문에
}

// 용어


// 영어단어


// 생각정리
// 그냥 문제만 읽었을 때는 어떻게 해야할지 복잡해 보였는데 한글로
// 놀이기구 가격 : x
// 타고싶은 회수 : y
// 내가 가진 돈 : z
// 타고 싶은 횟수를 탈때마다 새로운 변수 i를 선언해 그 i를 for문으로 타고 싶은 횟수(y)만큼 1부터 올리면서 돌리고
// 새로운 변수(총 놀이기구 가격을 넣을 곳)를 만들어 거기다가 i(놀이기구 탄 횟수)만큼 놀이기구 가격을 곱해서 
// for문이 반복할 때마다 총 가격에 더해주고 반복문이 끝나면 내가 가진돈이 그 총가격(for문을 다 돌리고 나온 가격)
// 보다 크면 0을 반환하고 아니라면 총가격에서 내 돈을 뺀 금액을 리턴하면 된다라고 
// 한글로 먼저 쓰고 코드를 써 나가니깐 시간이 좀 걸리더라도 천천히 해결됐다 