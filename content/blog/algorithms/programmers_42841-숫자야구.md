---
title: programmers_42841 숫자야구
date: 2020-07-10 16:07:99
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42841)


## 접근
3자리로 만들 수 있는 가장 작은 숫자는 123, 가장 큰 수는 987이다. 123 ~ 987까지의 모든 경우를 확인해야하는 완전탐색 문제이다.


## 풀이
1. 각 자릿수를 하나씩 비교해준다.
2. 숫자가 맞고, 위치가 같을 시, 스트라이크++
3. 숫자만 맞을 경우, 볼++
4. 스트라이크와 볼의 값을 확인하고, 같은 경우만 answer++

```java
  public class Solution42841 {
    public static int solution(int[][] baseball) {
      int answer = 0;
      for(int i=123; i<=987; i++){
          if (isPossible(i, baseball))
              answer++;
      }
      return answer;
  }
  public static boolean isPossible(int num, int[][] baseball){
      int numA=num/100;
      int numB=num/10%10;
      int numC=num%10;
      if (numA==numB || numA==numC || numB==numC || numB==0 || numC==0) return false;
      for(int len=0; len<baseball.length; len++){
          int strike=0;
          int ball=0;
          int compA=baseball[len][0]/100;
          int compB=baseball[len][0]/10%10;
          int compC=baseball[len][0]%10;
          if(numA==compA) strike++;
          if(numB==compB) strike++;
          if(numC==compC) strike++;
          if(numA!=compA && (numA==compB || numA==compC)) ball++;
          if(numB!=compB && (numB==compA || numB==compC)) ball++;
          if(numC!=compC && (numC==compB || numC==compA)) ball++;
          if(strike!=baseball[len][1] || ball!=baseball[len][2])
              return false;
      }
      return true;
  }
```
