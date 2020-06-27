---
title: programmers_42583 다리를 지나는 트럭(java)
date: 2020-06-24 19:06:07
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42583)

## 접근
주의할 점은 `다리 길이가 10000`, `다리가 견딜 수 있는 무게가 10000`, `이동할 트럭의 갯수가 10000 일` 경우,

한개의 트럭만 지나갈 수 있으므로 `시간 복잡도는 10000 * 10000 = 1억초`가 된다.

이럴 경우 시간 초과가 발생할 수 있다. 따라서, 다리에 트럭을 더이상 추가할 수 없는 경우에는 타임워프하는 방법으로 구현해야한다.


## 풀이
1. 다리를 통과할 수 있는 트럭이 있는지 확인
2. 다리에 트럭을 추가로 올릴 수 있는지 확인
  - 가능할 때, 다리위에 트럭을 추가하고 시간과 트럭의 위치를 1씩 증가
  - 불가능할 때, 가장 먼저 통과해야할 트럭(x)이 다리를 통과할 때 필요한 시간만큼 타임워프


```java
class Truck{
  int weight;
  int distance;
  public Truck(int weight, int distance) {
    this.weight = weight;
    this.distance = distance;
  }
}
```

```java
  public static int solution(int bridge_length, int weight, int[] truck_weights) {
    int answer_time = 0;
    int bridge_weight = 0;
    int move = 1;
    Queue<Truck> truck_que = new LinkedList<>();
    Queue<Truck> bridge_que = new LinkedList<>();
    for(int i=0; i<truck_weights.length; i++) {
      truck_que.add(new Truck(truck_weights[i], bridge_length));
    }

    while (!(truck_que.isEmpty() && bridge_que.isEmpty())) {
      // 다리를 통과할 수 있는 트럭이 있는지
      if (!bridge_que.isEmpty() && bridge_que.peek().distance == 0) {
        bridge_weight -= bridge_que.peek().weight;
        bridge_que.poll();
      }
      // 다리에 트럭을 추가할 수 있는지
      if (!truck_que.isEmpty()) {
        if (bridge_weight + truck_que.peek().weight <= weight) {
          bridge_weight += truck_que.peek().weight;
          bridge_que.add(truck_que.poll());
          move = 1;
        }else {
          bridge_weight -= bridge_que.peek().weight;
          move = bridge_que.poll().distance;
        }
      }
      Iterator<Truck> iter = bridge_que.iterator();
      while (iter.hasNext()) {
        iter.next().distance -= move;
      }
      answer_time += move;
    }
    return answer_time;
  }
```
