---
title: java 문자열 거꾸로 출력하기(reverse String)
date: 2020-09-01 10:09:53
category: java
draft: false
---

## 1. for loop

```java
public class Main {

    public static void main(String[] args) throws IOException {
        String str = "abcdefg";
        for (int i = str.length() - 1; i >= 0; i--) {
            System.out.print(str.charAt(i));
        }
    }
}
```

## 2. StringBuilder

```java
public class Main {

    public static void main(String[] args) throws IOException {
        String str = "abcdefg";
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb.reverse().toString());
    }
}
```