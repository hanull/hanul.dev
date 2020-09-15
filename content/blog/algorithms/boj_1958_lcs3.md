---
title: boj_1958_lcs3
date: 2020-09-15 21:09:95
category: algorithms
draft: false
---

## 문제
[LCS3](https://www.acmicpc.net/problem/1958)

## 접근법
문자열 3개의 LCS를 구해야 한다. 따라서 3차원 배열을 사용한다.

## 소스코드

```java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input1 = br.readLine();
        String input2 = br.readLine();
        String input3 = br.readLine();
        int len1 = input1.length();
        int len2 = input2.length();
        int len3 = input3.length();
        int[][][] dp = new int[len1 + 1][len2 + 1][len3 + 1];

        for (int i = 1; i <= len1; i++) {
            for (int j = 1; j <= len2; j++) {
                for (int k = 1; k <= len3; k++) {
                    if (input1.charAt(i - 1) == input2.charAt(j - 1) && input1.charAt(i - 1) == input3.charAt(k - 1)) {
                        dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
                    } else {
                        dp[i][j][k] = Math.max(dp[i - 1][j][k], Math.max(dp[i][j - 1][k], dp[i][j][k - 1]));
                    }
                }
            }
        }
        br.close();
        System.out.println(dp[len1][len2][len3]);
    }
}

```


## 만약, LCS 문자열을 구하라고 했을 경우

```java
    int x = len1;
    int y = len2;
    int z = len3;
    StringBuilder sb = new StringBuilder();
    while (dp[x][y][z] != 0) {
        if (dp[x - 1][y][z] == dp[x][y][z]) {
            x--;
        } else if (dp[x][y - 1][z] == dp[x][y][z]) {
            y--;
        } else if (dp[x][y][z - 1] == dp[x][y][z]) {
            z--;
        } else if (dp[x][y][z] - 1 == dp[x - 1][y - 1][z - 1]) {
            sb.append(input1.charAt(x - 1));
            x--; y--; z--;
        }
    }
```

```
efg
```