---
title: boj_14442_벽 부수고 이동하기2_java
date: 2020-10-19 18:10:06
category: algorithms
draft: false
---

## 문제
[벽 부수고 이동하기2](https://www.acmicpc.net/problem/14442)


## 접근법
bfs를 이용해서 (N,M)까지의 최단 거리를 구하면 된다. 다면 고려해야할 점은 K개의 벽을 부수고 이동할 수 있다는 점이다.

다시말해서 (x, y) 좌표까지 0~K개의 벽을 부수면서 이동할 수 있다는 것이고, (x, y) 좌표로 이동할 때 이전까지 몇개의 벽을 부쉈는지 알아야 한다는 것이다.

따라서, 큐에 좌표 정보와 이전까지 부순 벽의 수 정보를 담고 있어야한다. 그리고 방문 표시를 2차원 배열이 아닌 `visited[N][M][K]` 3차원으로 만들어서 해당 좌표를 다양한 방법으로 방문할 수 있도록 해야한다.


## 피드백
처음에는 해당 좌표에 0~K개의 벽을 부수고 온다는 점을 생각하지 않았고, 방문 표시를 2차원으로 선언하여 틀렸다. 2차원 배열로 선언하면 안되는 이유를 생각해 보자면, 이미 (x,y)까지 이동하는데 K개의 벽을 부쉈고, 목적지까지 갈 수 있는 (N-1, M), (N, M-1) 두 좌표가 벽일 때, 이미 K개의 벽을 다 부쉈기 때문에 정답을 도출할 수 없기 때문이다. 따라서 3차원 배열로 선언해서 (x,y) 좌표까지 0~k 개의 벽을 부수고 올 모든 경우를 구해야한다.

## 소스코드

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

    static int N,M,K;
    static int[][] map;
    static boolean[][][] visited;
    static int[] dx={1,-1,0,0};
    static int[] dy={0,0,1,-1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = stoi(st.nextToken());
        M = stoi(st.nextToken());
        K = stoi(st.nextToken());
        map = new int[N][M];
        visited = new boolean[N][M][K+1];
        for (int i=0; i<N; i++){
            String str = br.readLine();
            for (int j=0; j<M; j++) {
                map[i][j] = str.charAt(j) - '0';
            }
        }
        bfs(0,0);
    }

    private static void bfs(int x, int y) {
        Queue<Pair> q = new LinkedList<>();
        q.add(new Pair(x,y,0,1));
        visited[x][y][0] = true;
        while (!q.isEmpty()){
            Pair tmp = q.poll();
            int tx = tmp.x;
            int ty = tmp.y;
            int cnt = tmp.cnt;
            int d = tmp.d;
            if (tx==N-1 && ty==M-1) {
                System.out.println(d);
                return;
            }
            for (int i=0; i<4; i++) {
                int nx = tx+dx[i];
                int ny = ty+dy[i];
                if (!isRange(nx, ny)) continue;
                if (map[nx][ny] == 0 && visited[nx][ny][cnt]) continue;
                if (map[nx][ny] == 1) {
                    if (cnt >= K) continue;
                    if (visited[nx][ny][cnt+1]) continue;
                    visited[nx][ny][cnt+1] = true;
                    q.add(new Pair(nx,ny,cnt+1, d+1));
                } else {
                    visited[nx][ny][cnt] = true;
                    q.add(new Pair(nx,ny,cnt,d+1));
                }
            }
        }
        System.out.println("-1");
    }

    private static boolean isRange(int x, int y) {
        if (x<0 || x>=N || y<0 || y >=M) return false;
        return true;
    }

    private static int stoi(String input) {
        return Integer.valueOf(input);
    }
}

class Pair{
    int x,y,cnt,d;
    public Pair(int x, int y,int cnt, int d) {
        this.x=x;
        this.y=y;
        this.cnt=cnt;
        this.d=d;
    }
}
```
