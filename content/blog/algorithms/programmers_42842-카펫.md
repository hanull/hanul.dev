---
title: programmers_42842 카펫
date: 2020-07-03 16:07:58
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42842)


## 접근법
brown + yellow = 총 카펫의 칸 수(total), 즉 사각형의 너비가 된다. 여기서 가로길이가 세로길이보다 크거나 같다고 했기 때문에
세로길이는 최대 루트(총 카펫의 칸 수)이다. 가로길이는 총 카펫의 칸수/세로길이가 된다.

이러한 방법으로 가능한 가로/세로를 구하고, 각 가로/세로를 통해 brown, yellow 수를 체크한다.

brown = (가로*2) + (세로*2) - 4
yellow = (총 카펫의 칸 수) - brown


## 풀이
1. 총 카펫의 수를 구한다.
2. 세로길이 1부터 ~ 루트(총 칸의 수) 까지의 경우를 확인한다.

```java
  public static int[] solution(int brown, int yellow) {
    int[] res = new int[2];
    int totalBlock = brown + yellow;
    for(int i=1; i<=Math.sqrt(totalBlock); i++) {
      if (totalBlock%i==0) {
        int row = totalBlock/i;
        if (isAnswer(row, i, brown, yellow)) {
          res[0] = row;
          res[1] = i;
          break;
        }
      }
    }
    return res;
  }

  public static boolean isAnswer(int row, int col, int brown, int yellow) {
    int totalBlock = brown + yellow;
    int checkBrown = (row*2) + (col*2) - 4;
    int checkYellow = totalBlock - brown;
    if (!(checkBrown==brown)&&(checkYellow==yellow)) {
      return false;
    }
    return true;
  }
```
