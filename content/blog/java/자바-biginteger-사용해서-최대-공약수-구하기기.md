---
title: 자바 BigInteger 사용해서 최대 공약수 구하기기
date: 2020-11-06 19:11:56
category: java
draft: false
---


최대 공약수를 구할 때 항상 직접 구현했다. 그런데 BigInteger 클래스 안에 gcd() 내장 함수가 존재한다는 것을 알게 되었고, 이를 사용하여 최대 공약수를 구해봈다.

```java
import java.math.BigInteger;

public class Main {

    public static void main(String[] args) {
        int a = 8;
        int b = 12;
        int gcd = BigInteger.valueOf(a).gcd(BigInteger.valueOf(b)).intValue();
        System.out.println(gcd);
    }
}

```

```
4
```