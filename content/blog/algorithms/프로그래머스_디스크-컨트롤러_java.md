---
title: 프로그래머스_디스크 컨트롤러_java
date: 2020-11-01 16:11:67
category: algorithms
draft: false
---

## 문제
[디스크 컨트롤러](https://programmers.co.kr/learn/courses/30/lessons/42627)


## 접근법
2개의 우선순위 큐를 사용하여 해결 했다. 하나의 큐는 요청 시간을 오름차순으로 정렬한 대기큐이다. 그리고 또 하나의 큐는 처리 할 작업을 저장하는 큐이고, 여기서 작업양을 기준으로 정랄한다. 

1. 요청 시간을 기준으로 대기큐에 담는다.
2. 대기 큐에서 현재 시간보보다 작거나 같은 요청시간을 가진 작업을 처리큐에 담는다.
3. 현재 시간에 작업 시간을 더한다. 현재 시간에서 요청 시간을 빼서 이 작성을 처리하는 데 걸린 시간을 더한다.
4. 하나의 작업을 처리했으므로 cnt++, 2 ~ 3번 과정을 종료 시 까지 반복 수행한다.

## 소스코드

```java
import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    public int solution(int[][] jobs) {
        PriorityQueue<Pair> waitingQue = new PriorityQueue<>(new Comparator<Pair>() {
            @Override
            public int compare(Pair o1, Pair o2) {
                return Integer.compare(o1.requestTime, o2.requestTime);
            }
        });
        PriorityQueue<Pair> pq = new PriorityQueue<>(new Comparator<Pair>() {
            @Override
            public int compare(Pair o1, Pair o2) {
                return Integer.compare(o1.workingTime, o2.workingTime);
            }
        });
        for (int[] tmp : jobs) {
            int requestTime = tmp[0];
            int workingTime = tmp[1];
            waitingQue.offer(new Pair(requestTime, workingTime));
        }
        int answer = 0;
        int len = waitingQue.size();
        int time = waitingQue.peek().requestTime;
        int cnt = 0;
        while (cnt < len) {
            while (!waitingQue.isEmpty() && waitingQue.peek().requestTime <= time) {
                pq.offer(waitingQue.poll());
            }
            if (!pq.isEmpty()) {
                Pair tmp = pq.poll();
                time += tmp.workingTime;
                answer += time - tmp.requestTime;
                cnt++;
            } else {
                time++;
            }
        }
        return answer / len;
    }
}

class Pair {
    int requestTime, workingTime;

    public Pair(int requestTime, int workingTime) {
        this.requestTime = requestTime;
        this.workingTime = workingTime;
    }

}
```