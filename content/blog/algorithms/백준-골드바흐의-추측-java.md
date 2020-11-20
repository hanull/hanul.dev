---
title: 백준 골드바흐의 추측 java
date: 2020-11-20 17:11:56
category: algorithms
draft: false
---

## 문제
[골드바흐의 추측](https://www.acmicpc.net/problem/9020)

## 접근법
골드바흐 수를 알기 위해서는 n까지의 수 중 소수가 무엇인지 알아야한다. 그리고 합이 n이 되는 모든 경우의 수를 확인해 봐야한다.

1. n까지의 소수를 구한다.
2. 투포인터 방법을 통해 수소이면서, 합이 n인 모든 경우를 구한다. 
  - 여기서 모든 경우를 구하는 이유는 투포인터로 이동할 시, 마지막의 경우가 두 수의 차이가 가장 작기 때문이다.

## 피드백
처음에는 테스트 케이스 T를 반복할 때마다 소수를 새로 구하도록 코딩했고 T*logn 의 시간을 낭비했다. 

이후, 먼저 최대 n의 값까지 소수를 구하여 불필요한 시간을 줄일 수 있었다.

## 소스코드

```java

import java.util.Arrays;
import java.util.Scanner;

public class Main {


    static final int max = 10000;
    static boolean[] primeNumber;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        makePrime();
        for (int t = 0; t < T; t++) {
            int n = sc.nextInt();
            int left = 2;
            int right = n;
            int res1 = 0;
            int res2 = 0;
            while (left <= right) {
                if (!primeNumber[left]) left++;
                else if (!primeNumber[right]) {
                    right--;
                } else {
                    int hap = left + right;
                    if (hap == n) {
                        res1 = left;
                        res2 = right;
                    }
                    if (hap >= n) {
                        right--;
                    } else {
                        left++;
                    }
                }
            }
            System.out.println(res1 + " " + res2);
        }
    }

    private static void makePrime() {
        primeNumber = new boolean[max + 1];
        Arrays.fill(primeNumber, true);
        primeNumber[0] = primeNumber[1] = false;
        for (int i = 2; i <= Math.sqrt(max); i++) {
            for (int j = i * i; j <= max; j += i) {
                if (primeNumber[j]) primeNumber[j] = false;
            }
        }
    }

}

```