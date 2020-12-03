---
title: 백준 소수의 연속합 java
date: 2020-12-04 00:12:85
category: algorithms
draft: false
---


## 문제
[소수의 연속합](https://www.acmicpc.net/problem/1644)


## 접근법
먼저, 1년전에 6번 틀리고 결국 못풀었던 문제더라.. 근데 이번에 풀때는 어렵지 않게 풀었다. 

1. 에라토스테네스의 체를 사용해서 소수를 구한다.
2. 걸러진 소수를 통해 만들 수 있는 n이하의 모든 합을 구한다.
3. 결과 출력 전에, n이 소수일 경우 +1을 한다. 이유는 n 하나만을 통해서 n을 만들 수 있기 떄문이다.

## 소스코드

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean[] prime = new boolean[n + 1];
        int[] total = new int[4000001];
        Arrays.fill(prime, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            for (int j = i * i; j <= n; j += i) {
                if (prime[j]) prime[j] = false;
            }
        }
        for (int i = 2; i <= n; i++) {
            if (!prime[i]) continue;
            int cnt = i;
            for (int j = i + 1; j <= n; j++) {
                if (!prime[j]) continue;
                if (cnt + j > n) break;
                cnt += j;
                total[cnt] += 1;
            }
        }
        if (prime[n]) System.out.println(total[n] + 1);
        else System.out.println(total[n]);
    }

}

```