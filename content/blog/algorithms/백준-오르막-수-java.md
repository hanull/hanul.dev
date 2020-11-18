---
title: 백준 오르막 수 java
date: 2020-11-18 18:11:86
category: algorithms
draft: false
---

## 문제
[오르막 수](https://www.acmicpc.net/problem/11057)

## 접근법
|      | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| 2    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   |
| 3    | 1    | 3    | 6    | 10   | 15   | 21   | 28   | 36   | 45   | 55   |



## 소스코드

```java

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] dp = new int[n + 1][10];
        Arrays.fill(dp[1], 1);
        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < 10; j++) {
                for (int k = j; k >= 0; k--) {
                    dp[i][j] += dp[i - 1][k];
                }
                dp[i][j] %= 10007;
            }
        }
        int total = 0;
        for (int i = 0; i < 10; i++) {
            total += dp[n][i];
        }
        System.out.println(total  % 10007);
    }
}

```