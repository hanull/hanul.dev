---
title: 프로그래머스_여행경로_java
date: 2020-10-23 16:10:60
category: algorithms
draft: false
---


## 문제
[여행 경로](https://programmers.co.kr/learn/courses/30/lessons/43164?language=java)


## 접근법
모든 티켓을 사용해서, 모든 공항에 방문할 수 있는 모든 경로를 구하고 경로 중 오름차순의 첫 번째 경로를 구한다.

dfs 탐색을 이용해서 경로를 갱신하는 것을 이해하는 것이 중요하다.


1. HashMap을 통해서 출발지, 도착지, 티켓 번호를 저장한다.
2. "ICN"에서 시작하는 모든 경로를 벡트래킹으로 구한다.
3. 구한 경로를 정렬한 뒤, 리턴


## 소스코드

```java

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Solution sol = new Solution();
//        String[][] tickets = {{"ICN", "SFO"}, {"ICN", "ATL"}, {"SFO", "ATL"}, {"ATL", "ICN"}, {"ATL", "SFO"}};
//        String[][] tickets = {{"ICN", "JFK"}, {"HND", "IAD"}, {"JFK", "HND"}};
        String[][] tickets = {{"ICN", "A"}, {"A", "C"}, {"A", "D"}, {"D", "B"}, {"B", "A"}};
        System.out.println(Arrays.toString(sol.solution(tickets)));
    }
}

class Solution {

    static HashMap<String, ArrayList<Ticket>> hashMap = new HashMap<>();
    static boolean[] visited;
    static ArrayList<String> res = new ArrayList<>();

    public String[] solution(String[][] tickets) {
        visited = new boolean[tickets.length];
        for (int i = 0; i < tickets.length; i++) {
            String from = tickets[i][0];
            String dest = tickets[i][1];
            if (!hashMap.containsKey(from)) {
                hashMap.put(from, new ArrayList<>());
            }
            ArrayList<Ticket> lists = hashMap.get(from);
            lists.add(new Ticket(dest, i));
            hashMap.put(from, lists);
        }
        dfs("ICN", "", 0, tickets.length);
        Collections.sort(res);
        return res.get(0).split(" ");
    }

    private void dfs(String from, String path, int cnt, int goal) {
        path += from + " ";
        if (cnt == goal) {
            res.add(path);
            return;
        }
        if (hashMap.get(from) == null) return;
        for (Ticket ticket : hashMap.get(from)) {
            int no = ticket.no;
            String dest = ticket.dest;
            if (visited[no]) continue;
            visited[no] = true;
            dfs(dest, path, cnt + 1, goal);
            visited[no] = false;
        }
    }
}

class Ticket {
    String dest;
    int no;

    public Ticket(String dest, int no) {
        this.dest = dest;
        this.no = no;
    }
}
```