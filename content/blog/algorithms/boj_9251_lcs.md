---
title: boj_9251_LCS
date: 2020-09-15 19:09:05
category: algorithms
draft: false
---


## 문제
[LCS](https://www.acmicpc.net/problem/9251)

## 접근법
dp로 이차원배열 LCS를 만들면 된다.

## 소스 코드

```java

import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input1 = br.readLine();
        String input2 = br.readLine();
        int len1 = input1.length();
        int len2 = input2.length();
        int[][] dp = new int[len2 + 1][len1 + 1];

        for (int i = 1; i <= len2; i++) {
            for (int j = 1; j <= len1; j++) {
                if (input2.charAt(i - 1) == input1.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }
        System.out.println(dp[len2][len1]);
    }
}

```


## 참고
[crocus님 블로그](https://www.crocus.co.kr/787)