---
title: JAVA 순열(Permutation) 구현하기
date: 2020-09-19 18:09:67
category: algorithms
draft: false
---

모든 인덱스를 탐색하면서 방문하지 않은 인덱스의 위치를 방문처리하고, output 배열에 해당 위치의 값을 담아주면 된다.

이런 방법으로 r개의 값을 구하고 출력.

```java
    private static void permutation(int[] arr, boolean[] visited, int[] output, int len, int cnt, int r) {
        if (cnt == r) {
            printArr(output, r);
            return;
        }
        for (int i = 0; i < len; i++) {
            if (!visited[i]) {
                visited[i] = true;
                output[cnt] = arr[i];
                permutation(arr, visited, output, len, cnt + 1, r);
                visited[i] = false;
            }
        }
    }

    private static void printArr(int[] arr, int len) {
        for (int i = 0; i < len; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
```