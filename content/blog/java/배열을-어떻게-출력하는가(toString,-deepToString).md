---
title: 배열을 어떻게 출력하는가(toString, deepToString)[Java]
date: 2020-09-01 00:09:73
category: java
draft: false
---

```java
public class Main {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        System.out.println(arr.toString());
    }
}
```

```
[I@77459877
```

```java
public String toString() {
        return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

toString은 위와 같이 정의 되어있고, `hashcode` 가 출력는 이유이다. 

문자열로 배열의 값들만 출력하고 싶다면, `Arrays 클래스`의 `toString 메소드`를 사용하면 된다.

```java
int[] arr = {1, 2, 3, 4};
System.out.println(Arrays.toString(arr));
```

```
[1, 2, 3, 4]
```


### 다차원의 배열도 toString() 메소드로 출력 가능한가?
-> `NO`

다차원 배열의 경우에는, `deepToString 메소드`를 사용해야한다.

```java
int[][] arr2 = {{1, 2, 3, 4}, {4, 3, 2, 1}};
System.out.println(Arrays.deepToString(arr2));
```

```
[[1, 2, 3, 4], [4, 3, 2, 1]]
```