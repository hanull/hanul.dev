---
title: programmers_12933_정수 내림차순으로 배치하기
date: 2020-09-08 00:09:41
category: algorithms
draft: false
---

## 문제
[정수 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12933)

## 접근법
1. char 배열로 만든다.
2. 오름차순 정렬한다.
3. char배열로 StringBuilder를 생성.
4. StringBuilder를 이용해 내림차순으로 정렬.
5. 형변환 한 뒤, 결과 리턴

## 소스코드

```java
import java.util.Arrays;
class Solution {
    public long solution(long n) {
        char[] chars = String.valueOf(n).toCharArray();
        Arrays.sort(chars);
        StringBuilder sb = new StringBuilder(new String(chars));
        return Long.parseLong(sb.reverse().toString());
    }
}
```