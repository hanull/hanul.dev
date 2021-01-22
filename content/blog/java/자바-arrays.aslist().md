---
title: 자바 Arrays.asList()
date: 2021-01-22 21:01:35
category: java
draft: false
---


Arrays.asList() 를 사용하다가 새로운 점을 발견했다. 

```java
public static void main(String[] args) {
    String[] str = {"a", "b", "c"};
    List<String> list = Arrays.asList(str);
    for (String s : list) {
        System.out.print(s + " ");
    }

    list.add("z");
}
```

String 배열을 리스트로 바꾼 뒤에  위의 예제와 같이 "zz" 문자열을 추가하려고 했는데 `Exception in thread "main" java.lang.UnsupportedOperationException` 오류가 발생했다. 지원하지 않는다고 한다. 

왜인가 찾아보니 Arrays.asList() 로 만든 list는 `원본 배열의 주소값만` 을 가진다고 한다. 따라서, 해당 리스트의 사이즈는 고정되어 있고 `공간에 변화가 발생되는 행동을 할 수 없다`는 것이다.


### 리스트의 i번째 있는 값을 바꾼다면 어떻게 될까??? 
원본 배열의 주소값을 가지기 때문에, 리스트의 값을 바꾸게 되면 원본 배열의 값을 바꾸는 것과 같다. 

```java
list.set(0, "zz");
System.out.println(str[0]);
```

```
zz
```

### 동적으로 크기에 변화를 줄 수 있는 새로운 리스트를 만들기 위해서는 어떻게 할까??
아래와 같이 새로운 객체 배열을 만들어서 사용해야 한다.

```java
String[] str = {"a", "b", "c"};
List<String> list = new ArrayList<>(Arrays.asList(str));

list.add("zz");
for (String s : list) {
    System.out.print(s + " ");
}
```