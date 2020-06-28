---
title: programmers_42840 모의고사
date: 2020-06-28 19:06:92
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42840)


## 접근
세사람의 모든 경우를 구하는 완전 탐색 문제이다. 문제의 수가 10000이고 사람은 3명으로 정해져있기 때문에 시간 초과 걱정은 하지 않다도 된다.


## 풀이
1. 세사람의 찍는 방식을 2차원 배열에 저장한다.
2. 각 사람의 정답수를 구해서 스택에 저장.
  - 스택에 저장된 사람의 정답수보다 x사람의 정답수가 더 클 경우, 스택을 비우고 x의 정답수를 스택에 추가.
  - 스택에 저장된 사람의 정답수와 x사람의 정답수가 같은 경우, x의 정답수를 스택에 추가.
3. 스택에 저장된 사람 배열을 리런

```java
class Pair{
  int no;
  int cnt;
  public Pair(int no, int cnt) {
    this.no = no;
    this.cnt = cnt;
  }
}
```

```java
public static int[] solution(int[] answers) {
    int[][] person = {{1,2,3,4,5},
        {2,1,2,3,2,4,2,5},
        {3,3,1,1,2,2,4,4,5,5}};
    Stack<Pair> stack = new Stack<>();
    int cnt;
    for (int i=0; i<3; i++) {
      cnt=0;
      for (int number=0; number<answers.length; number++) {
        if (person[i][number%person[i].length] == answers[number]) {
          cnt++;
        }
      }
      if (stack.isEmpty()) {
        stack.add(new Pair(i, cnt));
      }else {
        if (stack.peek().cnt == cnt) {
          stack.add(new Pair(i, cnt));
        }else if (stack.peek().cnt < cnt) {
          stack.clear();
          stack.add(new Pair(i, cnt));
        }
      }
    }
    int[] res = new int[stack.size()];
    for(int i=res.length-1; i>=0; i--) {
      res[i] = stack.pop().no + 1;
    }
    return res;
  }
```


### 풀이2
1. 세사람의 정답수를 모두 구하고 Max 값을 먼저 구한다.
2. Max값과 같은 정답수를 가진 사람을 list에 저장한다.
3. 저장된 list를 배열로 바꾸고 리턴해준다.

```java
  public static int[] solution(int[] answers) {
    int[][] person = {{1,2,3,4,5},
        {2,1,2,3,2,4,2,5},
        {3,3,1,1,2,2,4,4,5,5}};
    int[] score = new int[3];
    int cnt;
    for(int i=0; i<3; i++) {
      cnt=0;
      for (int number=0; number<answers.length; number++) {
        if(person[i][number%person[i].length] == answers[number]) {
          cnt++;
        }
      }
      score[i] = cnt;
    }
    int maxValue = Math.max(score[0], Math.max(score[1], score[2]));
    ArrayList<Integer> list = new ArrayList<>();
    for(int i=0; i<3; i++) {
      if(maxValue == score[i]) list.add(i+1);
    }
    return list.stream().mapToInt(i->i.intValue()).toArray();
  }
```
