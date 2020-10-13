---
title: 카카오 인턴십 문제 "크레인 인형뽑기 게임" java
date: 2020-08-31 16:08:47
category: algorithms
draft: false
---


## 문제
[크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

## 접근법
조건대로만 구현하면 되는 문제이다. 

먼저 board의 각 열을 하나의 스택으로 구성하였다. 

그리고 movd[i] 번에 위치한 스택에서 인형을 하나씩 빼서 bucket 스택에 담았다. (인형을 bucket에 담을 때, 같은 인형인지 확인)


## 소스 코드

```java
import java.util.ArrayList;
import java.util.Stack;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        int len = board.length;
        int size = board[0].length;
        ArrayList<Stack<Integer>> stacks = new ArrayList<>();
        Stack<Integer> bucket = new Stack<>();

        for (int i = 0; i < size; i++) {
            stacks.add(new Stack<Integer>());
            for (int j = len - 1; j >= 0; j--) {
                if (board[j][i] != 0) {
                    stacks.get(i).add(board[j][i]);
                }
            }
        }
        for (int i = 0; i < moves.length; i++) {
            if (stacks.get(moves[i] - 1).isEmpty()) continue;
            int newOne = stacks.get(moves[i] - 1).pop();
            if (bucket.isEmpty()) {
                bucket.add(newOne);
            } else if (check(newOne, bucket.peek())) {
                bucket.pop();
                answer += 2;
            } else {
                bucket.push(newOne);
            }
        }
        return answer;
    }

    private boolean check(int newOne, Integer top) {
        return newOne == top ? true : false;
    }
}
```
