---
title: boj_1662_압축_java
date: 2020-10-29 14:10:22
category: algorithms
draft: false
---

## 문제
[압축](https://www.acmicpc.net/problem/1662)


## 접근법
스택을 활용히여 문자열의 맨 뒤부터 체크하며 해결했다. 

- ")"을 만난다면, 스택에 -1을 푸시
- "("을 만난다면, ")"을 만날 때 까지 스택 pop()하면서 더해 나간다. 그리고 K(Q) 처럼 압축된다고 했으니까 "(" 앞의 숫자는 반드시 K가 된다. 따라서 현재까지 더한 숫자(문자열 길이)에 K를 곱하면 압축을 해제한 문자열의 길이가 나오게 된다.
- 숫자를 만난다면, 반드시 1자릿수 이므로 1을 스택에 push() 한다.
- 이를 0번 인덱스까지 반복 수행하고, 남은 스택의 수를 더하여 최종 문자열의 길이를 구한다.


## 소스코드

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {

    static char[] input;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        input = br.readLine().toCharArray();
        System.out.println(solve());
    }

    private static int solve() {
        int len = input.length - 1;
        Stack<Integer> stack = new Stack<>();
        while (len >= 0) {
            char ch = input[len];
            if (ch == ')') {
                stack.push(-1);
            } else if (ch == '(') {
                int total = 0;
                while (stack.peek() != -1) {
                    total += stack.pop();
                }
                stack.pop();
                int cnt = input[--len] - '0';
                int num = cnt * total;
                stack.push(num);
            } else {
                stack.push(1);
            }
            len--;
        }
        int res = 0;
        while (!stack.isEmpty()) {
            res += stack.pop();
        }
        return res;
    }

}

```