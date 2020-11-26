---
title: 백준 n-queen java
date: 2020-11-26 16:11:02
category: algorithms
draft: false
---

## 문제
[n-queen](https://www.acmicpc.net/problem/9663)

## 접근 방법
0번 행부터 N-1번 행까지 0 ~ N-1의 열에 퀸을 놓을 수 있는 모든 경우의 수를 찾으면 된다. 전형적인 `백트래킹` 문제이다.

1. 해당 위치에서 퀸이 이동할 수 있는 위치를 표시한다. (방문 횟수 +1)
2. 새로 퀸을 놓으려는 장소의 방문 횟수가 > 0 이라면, 이미 놓은 퀸이 도달할 수 있는 장소이므로 놓을 수 없다.
3. 위 과정을 N-1번 행까지 반복 수행.

## 소스 코드

```java
import java.util.Scanner;

public class Main {

    static int N;
    static int total = 0;
    static int[][] visited;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        if (N == 1) {
            System.out.println(1);
        } else {
            visited = new int[N][N];
            dfs(0);
            System.out.println(total);
        }
    }

    private static void dfs(int x) {
        if (x == N) {
            total++;
            return;
        }
        for (int j = 0; j < N; j++) {
            if (visited[x][j] > 0) continue;
            checkVisited(x, j, 0);
            dfs(x + 1);
            checkVisited(x, j, 1);
        }
    }

    private static void checkVisited(int x, int y, int flag) {
        int check = flag == 0 ? 1 : -1;
        for (int i = x; i < N; i++) {   // 열 체크
            visited[i][y] += check;
        }
        int ty = y + 1;
        for (int i = x + 1; i < N; i++) {   // 대각선 오른쪽
            if (ty == N) break;
            visited[i][ty] += check;
            ty++;
        }
        ty = y - 1;
        for (int i = x + 1; i < N; i++) {   // 대각선 왼쪽
            if (ty < 0) break;
            visited[i][ty] += check;
            ty--;
        }
    }
}
```