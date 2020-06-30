---
title: programmers_42839 소수찾기
date: 2020-06-30 18:06:38
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42839)


## 접근



## 풀이
1. input 문자열을 int형 배열로 변환한다.
2. input으로 만들 수 있는 max 값을 구한다.
3. max 까지의 범위에서 소수값을 구한다.
4. 소수값(x)를 문자열로 변환하여 input 숫자와 하나씩 비교하면서 만들 수 있는 숫자인지 확인한다.
ex) 소수 23을 보자.
- 먼저 2를 input을 0번 인덱스부터 확인하며 2가 존재하는지 확인한다.
  - 존재할 시, cnt++
- 이런 방법으로 2, 3을 input에서 모두 확인하고, 최종적으로 (cnt == 소수의 길이) 같을 경우
만들 수 있는 숫자이므로 결과 카운트를 증가시켜준다.



```java
  public static int solution(String numbers) {
    int[] arrNums = Arrays.stream(numbers.split(""))
        .sorted(Comparator.reverseOrder())
        .mapToInt(x -> Integer.valueOf(x))
        .toArray();
    int max = 0;
    for(int i=0; i<arrNums.length; i++) {
      max += arrNums[i]* Math.pow(10,arrNums.length - 1 - i);
    }
    int [] prime = new int[max+1];
    Arrays.setAll(prime, i -> i);
    prime[1]=0;
    for(int i=2; i<=max; i++) {
      if (prime[i] == 0) continue;
      for(int j=i*2; j<=max; j+=i) {
        prime[j] = 0;
      }
    }
    int cnt = 0;
    for(int i=2; i<=max; i++) {
      if (prime[i] !=0 && isPossible(i, arrNums))
        cnt++;
    }
    return cnt;
  }

  public static boolean isPossible(int x, int[] arr) {
    boolean[] check = new boolean[arr.length];
    String str = String.valueOf(x);
    int cnt = 0;
    // 소수이면서, 주어진 숫자로 만들 수 있는 값만 리턴
    for(int i=0; i<str.length(); i++) {
      int tmp = str.charAt(i) - '0';
      for(int j=0; j<arr.length; j++) {
        if (!check[j] && tmp == arr[j]) {
          check[j] = true;
          cnt++;
          break;
        }
      }
    }
    return cnt != str.length() ? false : true;
  }
```
