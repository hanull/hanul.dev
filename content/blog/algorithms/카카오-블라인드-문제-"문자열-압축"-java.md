---
title: 카카오 블라인드 문제 "문자열 압축" java
date: 2020-09-01 00:09:01
category: algorithms
draft: false
---


## 문제
[문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

## 접근 방법
문자열 S가 있을 때, 최대 `문자열/2`의 길이로 문자열 S를 자를 수 있다.  그리고 문자열의 S의 길이가 2이하이면, 압축이 불가능하기 때문에 바로 리턴해준다.
그 외의 경우에는 `1부터 문자열/2` 의 길이로 S를 압축해서 최소 길이를 구하면 된다.

1. 문자을을 x길이로 자른다.
2. 자른 문자열(str)과 같은 경우를 count
3. count + str 을 ArrayList에 저장
4. 1~3 반복 수행
5. 저장된 문자열의 길이를 반환

## 소스 코드

```java
import java.util.ArrayList;

class Solution {

    public int solution(String s) {
        int minLength = s.length();
        if (minLength <= 2) return minLength;   // input의 길이가 2이하 일 때, 압출 불가능

        for (int i = 1; i <= s.length()/2; i++) {
            int len = splitNum(s, i);
            if (minLength > len) minLength = len;
        }
        return minLength;
    }

    private int splitNum(String input, int splitSize) {
        ArrayList<String> list = new ArrayList<>();
        int i = 0;
        int j = 0;
        int len = input.length();

        while (i < len) {
            if (i + splitSize >= len) break;
            String tmp = input.substring(i, i + splitSize);
            j = i + splitSize;
            int cnt = 1;
            while (j + splitSize <= len && input.substring(j, j + splitSize).equals(tmp)) {
                j += splitSize;
                cnt++;
            }
            if (cnt > 1) {
                list.add(cnt + tmp);
            } else {
                list.add(tmp);
            }
            i = j;
        }
        while (i < len) {
            list.add(input.substring(i, i + 1));
            i++;
        }
        String res = "";
        for (String tmp : list) {
            res+=tmp;
        }
        return res.length();
    }
}
```
