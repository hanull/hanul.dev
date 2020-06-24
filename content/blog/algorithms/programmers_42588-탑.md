---
title: programmers_42588 탑
date: 2020-06-23 18:06:41
category: algorithms
draft: false
---

### 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42588)


### 풀이

```java
  public static int[] solution(int[] heights) {
    if (heights.length < 1){
      return null;
    }
    if (heights.length == 1) {
      int[] answer = {0};
      return answer;
    }
    int[] answer = new int[heights.length];
    for(int i=0; i<heights.length; i++) {
      for(int j=i; j>=0; j--) {
        if(heights[j] > heights[i]) {
          answer[i] = j+1;
          break;
        }
      }
    }
    return answer;
  }
```
