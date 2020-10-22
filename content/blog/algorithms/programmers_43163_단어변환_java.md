---
title: programmers_43163_단어변환_java
date: 2020-10-22 15:10:39
category: algorithms
draft: false
---

## 문제
[단어 변환](https://programmers.co.kr/learn/courses/30/lessons/43163)

## 접근법
bfs를 통해 가능한 모든 단어를 만들고, target 단어를 발견할 시 결과를 반환하면 된다. 여기서 모든 단어를 만드는 방법, 만들었던 단어인지  체크하는 것이 포인트이다.
HashSet을 통해서 조합할 수 있는 모든 알파벳을 저장하고, HashSet을 통해서 중복되는 단어를 체크했다.

1. 주어진 단어들을 통해 사용 가능한 모든 알파벳을 HashSet에 저장한다.
2. 각 단어의 i번 인덱스를 바꾸어, 새로운 알파벳을 만든다.
3. 이미 만들어본 단어인지 , words에 포함된 단어인지 확인한다.
4. 유효한 단어라면, 횟수+1 하고 큐에 저장한다.
5. target 단어를 찾을 때 까지 반복 수행.
6. 못찾을 시, 0 반환.


## 소스코드

```java

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {
        Solution sol = new Solution();
        String begin = "hit";
        String target = "hhh";
        String[] words = {"hhh", "hht"};
        System.out.println(sol.solution(begin, target, words));
    }
}

class Solution {

    static HashSet<Character> dict = new HashSet<>();
    static HashSet<String> visited = new HashSet<>();

    public int solution(String begin, String target, String[] words) {
        makeDict(words);
        int res = bfs(begin, target, words);
        return res;
    }

    private int bfs(String begin, String target, String[] words) {
        int res = 0;
        Queue<Pair> q = new LinkedList<>();
        q.add(new Pair(begin, 0));
        visited.add(begin);
        while (!q.isEmpty()) {
            Pair tmp = q.poll();
            String word = tmp.word;
            int cnt = tmp.cnt;
            if (word.equals(target)) {
                res = cnt;
                break;
            }
            for (int i = 0; i < word.length(); i++) {
                for (char ch : dict) {
                    String pre = word.substring(0, i) + ch;
                    String post = word.substring(i + 1, word.length());
                    String newWord = pre.concat(post);
                    if (visited.contains(newWord)) continue;
                    if (!isContain(newWord, words)) continue;
                    visited.add(newWord);
                    q.add(new Pair(newWord, cnt + 1));
                }
            }
        }
        return res;
    }

    private boolean isContain(String newWord, String[] words) {
        for (int i = 0; i < words.length; i++) {
            if (words[i].equals(newWord)) {
                return true;
            }
        }
        return false;
    }

    private void makeDict(String[] words) {
        for (String str : words) {
            for (char ch : str.toCharArray()) {
                dict.add(ch);
            }
        }
    }
}

class Pair {
    String word;
    int cnt;

    public Pair(String word, int cnt) {
        this.word = word;
        this.cnt = cnt;
    }
}
```