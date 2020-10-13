---
title: JAVA 조합(Combination) 구하기
date: 2020-09-19 17:09:98
category: algorithms
draft: false
---

조합이란? n개의 숫자 중 r개를 선택하는 모든 경우를 구하는 것이다.   
고려해야할 것은 `배열에서 i번재 인덱스를 선택하는 경우`, `선택하지 않을 경우` 단 두 경우이다.
이는 `백트래킹`, `재귀`를 사용하여 구할 수 있다. 

4개의 [1,2,3,4] 배열이 있을 때, 2개를 선택하는 경우를 보자.

## 백트래킹

```java
    private static void comb_backtracking(int[] arr, boolean[] visited, int len, int start, int cnt, int r) {
        if (cnt == r) {
            printArr(arr, visited);
            return;
        }
        for (int i = start; i < len; i++) {
            visited[i] = true;
            comb_backtracking(arr, visited, len,i + 1, cnt + 1, r);
            visited[i] = false;
        }
    }
```

## 재귀
재귀가 더 직관적이지만, 함수 호출의 수가 많기 때문에 백트래킹을 사용하는 것을 권장.

```java
    private static void comb_recursive(int[] arr, boolean[] visited, int depth, int idx, int cnt, int r) {
        if (cnt == r) {
            printArr(arr, visited);
            return;
        }
        if (depth == idx) {
            return;
        }
        visited[idx] = true;
        comb_recursive(arr, visited, depth, idx + 1, cnt + 1, r);
        visited[idx] = false;
        comb_recursive(arr, visited, depth, idx + 1, cnt, r);
    }
```


### 참고
[뱀귤님 블로그](https://bcp0109.tistory.com/15)