---
title: 백준 에디터 java
date: 2020-11-23 18:11:28
category: algorithms
draft: false
---

## 문제
[에디터](https://www.acmicpc.net/problem/1406)



## 접근법
삽입, 삭제가 빈번하게 일어나기 때문에 해당 문제를 처리하기 위해 연결 리스트가 효율적이라고 생각했다. 그런데 시간 초과 발생.

왜냐하면 연결 리스트로 삽입, 삭제시 해당 위치까지 탐색해서 처리해야하는 발생하는 시간 때문이다.

이 문제점을 해결하기 위해서는 위치를 다시 찾아가는 것 말고, 해당하는 위치에 있으면서 삽입/삭제를 처리할 수 있기만 하면 된다.

이때 활용할 수 있는 것이 `ListIterator`이다. ListIterator는 컬렉션의 요소에 접근할 때 순방향, 역방향으로만 이동할 수 있다.



## 소스코드

```java

import java.io.*;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.ListIterator;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String inputStr = br.readLine();
        LinkedList<String> list = new LinkedList<>(Arrays.asList(inputStr.splt("")));
        ListIterator<String> listIterator = list.listIterator(list.size());
        int M = stoi(br.readLine());
        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            switch (st.nextToken()) {
                case "L":
                    if (listIterator.hasPrevious()) listIterator.previous();
                    break;
                case "D":
                    if (listIterator.hasNext()) listIterator.next();
                    break;
                case "B":
                    if (listIterator.hasPrevious()) {
                        listIterator.previous();
                        listIterator.remove();
                    }
                    break;
                case "P":
                    listIterator.add(st.nextToken());
                    break;
            }
        }
        for (String alpa : list) {
            bw.write(alpa);
        }
        bw.close();
        br.close();
    }

    private static int stoi(String input) {
        return Integer.valueOf(input);
    }
}


```