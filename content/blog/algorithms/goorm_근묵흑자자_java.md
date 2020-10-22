---
title: goorm_근묵흑자자_java
date: 2020-10-22 13:10:14
category: algorithms
draft: false
---


## 문제
[근묵흑자](https://devth-preview.goorm.io/exam/53763/%EC%A3%BC-%EA%B5%AC%EB%A5%B4%EB%AF%B8-%EC%8B%A0%EC%9E%85-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EA%B3%B5%EA%B0%9C%EC%B1%84%EC%9A%A9-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8/quiz/2?_ga=2.22476799.531264434.1598839678-1290480941.1598839678)

## 접근법
1. 최소값 1의 위치(start)를 구한다.
2. (start - K + 1)에서 부터 (start + K - 1)은 처음 시작 포인르가 될 수 있다.
3. 위의 모든 경우를 브루트포스 방법으로 수행하여 최소값을 리턴.

## 소스코드

```java

import java.io.*;
import java.util.StringTokenizer;

class Main {

    static int N, K;
    static int[] arr;
    static int cur;
    static int min = Integer.MAX_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = stoi(st.nextToken());
        K = stoi(st.nextToken());
        arr = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i] = stoi(st.nextToken());
            if (arr[i] == 1) cur = i;
        }
        solve();
        System.out.println(min);
    }

    private static void solve() {
        int start = cur - K + 1;
        int end = N - K;
        while (true) {
            if (start > end) break;
            if (start >= 0) {
                int left = 0;
                int tmp = 0;
                if (start > 0) {
                    tmp = start % (K - 1) > 0 ? 1 : 0;
                    left = start / (K - 1) + tmp;
                }
                int endPoint = start + K - 1;
                tmp = (N - 1 - endPoint) % (K - 1) > 0 ? 1 : 0;
                int right = (N - 1 - endPoint) / (K - 1) + tmp;
                int total = left + right + 1;
                if (total < min) min = total;
            }
            start++;
        }
    }

    private static int stoi(String input) {
        return Integer.valueOf(input);
    }
}
```