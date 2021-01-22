---
title: 자바 int 배열 list로 바꾸기
date: 2021-01-22 21:01:02
category: java
draft: false
---

reference 타입인 경우 `Arrays.asList()` 를 사용해서 배열을 리스트로 쉽게 변경할 수 있다.

```java
Integer[] referenceType = {1, 2, 3, 4, 5, 6, 7};
List<Integer> list = Arrays.asList(referenceType);

for (Integer num : list) {
    System.out.print(num + " ");
}
```

```
1 2 3 4 5 6 7
```


반면에, primitive type 인 경우 Arrays.asList()를 사용해서 바꿀 수 없고, 아래와 같이 wrapper 클래스로 박싱해준 뒤에 처리해야 한다.

```java
List<Integer> list = Arrays.stream(primitiveType).boxed().collect(Collectors.toList());
```