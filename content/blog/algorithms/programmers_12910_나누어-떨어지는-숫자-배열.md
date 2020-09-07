---
title: programmers_12910_나누어 떨어지는 숫자 배열
date: 2020-09-07 22:09:60
category: algorithms
draft: false
---

## 문제
[나누어 떨어지는 숫자](https://programmers.co.kr/learn/courses/30/lessons/12910)

## 접근법
스트림 만들어서 정렬 시키고, 나누어 떨어지는 값을 찾아서 리턴.

stream 으로 최대한 코드 길이를 줄여봤다. stream 을 편하게 사용할 수 있도록 연습해야겠다.

## 소스 코드

```java
import java.util.Arrays;
class Solution {
    public int[] solution(int[] arr, int divisor) {
        int[] res = Arrays.stream(arr).sorted().filter(i -> i % divisor == 0).toArray();
        return res.length != 0 ? res : new int[]{-1};
    }
}
```