---
title: Programmers_42586. 기능개발(java)
date: 2020-06-22 19:06:60
category: algorithms
draft: false
---

### 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42586)


### 풀이(1)
1. 모든 작업(n)의 총 작업시간을 구한다.
2. i일과 함께 배포할 수 있는 작업을 구한다. (i일 작업시간 >= x일 작업시간)
3. i일의 작업시간을 초과하는 x일이 나오면, 그 동안 찾은 작업의 수를 큐에 삽입.
4. 2~3번 과정을 반복
5. 큐 사이즈만큼 배열을 만들어서 결과 반환

```java
public int[] solution(int[] progresses, int[] speeds) {
	int len = progresses.length;
	if (len < 1)
		return null;
	int[] workingDay = new int[len];
	for(int i=0; i<len; i++){
		workingDay[i] = cal(progresses[i], speeds[i]);
	}
	Queue<Integer> list = new LinkedList<>();
	int tmp = workingDay[0];
	int cnt = 1;
	for(int i=1; i<len; i++) {
		if (tmp >= workingDay[i]) {
			cnt++;
		}else {
			list.add(cnt);
			tmp = workingDay[i];
			cnt=1;
		}
		if (i==len-1)
			list.add(cnt);
	}
	int[] answer = new int[list.size()];
	for(int i=0; i<answer.length; i++) {
		answer[i] = list.peek();
		list.remove();
	}
	return answer;
}

public int cal(int x, int y){
	int res = (100 - x) / y;
	return (((100 - x) % y) > 0 ? res + 1 : res);
}
```



### 풀이(2)
다른 분들의 코드를 참고하여 더 나은 Queue 활용법을 알게 되었다. 함께 배포할 수 있는 모든 작업을 Queue에 넣고, 그 Queue의 사이즈를 List에 저장하는 방법이다. 이 방법을 통해 각 작업의 소요시간을 미리 구하고(1번 과정), 여러 변수(cnt, tmp)와 마지막 작업 고려를 않아도 된다.

1. 작업 시간을 구하여 Queue에 저장
2. Queue맨위의 값과 i번째 작업 시간을 비교.
  - if (Queueu.peek() >= X(i번째 작업시간))   :  큐에 작업 시간 추가
  - else   :   큐의 사이즈만큼 arrayList에 추가, 큐 초기화
3. arrayList 사이즈 만큼 배열을 생성하고, 결과 반환


```java
public int[] solution(int[] progresses, int[] speeds) {
	Queue<Integer> que = new LinkedList<>();
	List<Integer> arrayList = new ArrayList<>();
	for (int i=0; i<progresses.length; i++){
		int workingTime = cal(progresses[i], speeds[i]);
		if (!que.isEmpty() && que.peek() < workingTime){
			arrayList.add(que.size());
			que.clear();
		}
		que.add(workingTime);
	}
	arrayList.add(que.size());
	int[] answer = new int[arrayList.size()];
	for (int i=0; i<arrayList.size(); i++){
		answer[i] = arrayList.get(i);
	}
	return (answer);
}
public int cal(int x, int y){
	int res = (100-x)/y;
	int remainder = (100-x)%y;
	return (remainder > 0 ? res+1 : res);
}
```
