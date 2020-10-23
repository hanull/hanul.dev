---
title: ArrayList를 String[]로변환하는 방법
date: 2020-10-23 12:10:50
category: java
draft: false
---



```java
ArrayList<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
```



1. 반복문 사용

```java
String[] arr = new String[list.size()];
for (int i = 0; i < list.size(); i++) {
    arr[i] = list.get(i);
}
```

2. toArray 

```java
String[] arr = list.toArray(new String[0]);
```

```java
String[] arr = list.toArray(String[]::new);
```


3. stream

```java
String[] arr = list.stream().toArray(String[]::new);
```

```java
String[] arr = list.stream().toArray(size -> new String[size]);
```