---
title: 백준 팰린드롬 만들기 java
date: 2020-11-09 13:11:77
category: algorithms
draft: false
---

## 문제
[팰린드롬 만들기](https://www.acmicpc.net/problem/1213)

## 접근법
문자열의 앞과 뒤에서 읽을 때 모두 같은 문자열일 경우를 팰린드롬이라고 한다.
그리고 팰림드롬은 아래와 같은 경우 만족한다.
- 주어진 알파벳의 개수가 모두 짝수이다.
- 주어진 알파벳의 개수가 홀수인 경우가 있을 때, 홀수개의 알파벳은 반드시 1개를 초과할 수 없다.

1. 각각 알파벳의 개수를 카운트한다.
2. 홀수개를 가지는 알파벳의 개수를 체크한다. 2가지 이상일 경우, 불가능.
3. (알파벳 개수 / 2개)를 앞, 뒤쪽 문자열에 저장한다.
4. 최종적으로, 남은 하나의 홀수 문자를 가운데 위치에 더하여 출력한다. 여기서 홀수 문자를 하나 더하는 이유는 앞뒤로 /2개씩 저장하게 되면 반드시 1개가 남기 때문이다.


## 피드백
처음에 홀수 개수를 처리하는 방법을 잘 못 생각햇다. 홀수인 경우를 앞뒤로 /2개를 저장하지 않고, 모든 개수의 문자를 따로 저장해두고 마지막에 추가하는 방법으로 진행했다. 그 결과 가장 빠른 문자열을 출력하지 못했다.
예를들어서 아래와 같은 경우, 가장 빠른 사전순을 출력할 수 없게 된다.

```
AABBCCCDD  
답 : ABCDCDCBA  
출력값 : ABDCCCDBA
```

따라서 홀수개수인 알파벳 경우도, /2개씩 앞 뒤로 저장하고 남은 하나의 문자를 마지막에 저장하는 방법으로 수행해야 한다.


## 소스코드

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        StringBuilder back = new StringBuilder();
        StringBuilder res = new StringBuilder();
        int[] alpa = new int[26];

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            alpa[ch - 'A'] += 1;
        }
        int midCnt = 0;
        boolean flag = true;
        for (int i = 0; i < 26; i++) {
            if (alpa[i] % 2 != 0) midCnt++;
        }
        if (midCnt > 1) flag = false;
        String mid = "";
        if (flag) {
            for (int i = 0; i < 26; i++) {
                int cnt = alpa[i];
                if (cnt == 0) continue;
                char ch = (char) (i + 'A');
                String str = String.valueOf(ch);
                if (cnt % 2 == 0) {
                    for (int j = 0; j < cnt / 2; j++) {
                        back.append(str);
                        res.append(str);
                    }
                } else {
                    for (int j = 0; j < cnt / 2; j++) {
                        back.append(str);
                        res.append(str);
                    }
                    mid = str;
                }
            }
            res.append(mid);
            res.append(back.reverse());
            System.out.println(res.toString());
        } else {
            System.out.println("I'm Sorry Hansoo");
        }
    }
}

```